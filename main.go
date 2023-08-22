package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/nsf/termbox-go"
)

type Option struct {
	Text  string
	Value string
}

func getFile() string {
	dir, err := os.UserHomeDir()

	if err != nil {
		panic(err)
	}

	return filepath.Join(dir, "config.text")
}

var file = getFile()
var options = []Option{}

func removeProject(path string) {

	if _, err := os.Stat(file); os.IsNotExist(err) {
		_, err := os.Create(file)
		if err != nil {
			panic(err)
		}
	}

	f, err := os.Open(file)
	if err != nil {
		panic(err)
	}

	defer f.Close()

	tmp, err := ioutil.TempFile("", "tmp")
	if err != nil {
		panic(err)
	}

	defer func() {
		tmp.Close()
		os.Remove(tmp.Name())
	}()

	scanner := bufio.NewScanner(f)

	writer := bufio.NewWriter(tmp)

	for scanner.Scan() {

		line := scanner.Text()

		if line == path {
			continue
		}

		_, err = writer.WriteString(line + "\n")
		if err != nil {
			panic(err)
		}
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	err = writer.Flush()
	if err != nil {
		panic(err)
	}

	err = os.Rename(tmp.Name(), file)
	if err != nil {
		panic(err)
	}

}

func addProject(path string) {

	if _, err := os.Stat(file); os.IsNotExist(err) {
		_, err := os.Create(file)
		if err != nil {
			panic(err)
		}
	}

	f, err := os.OpenFile(file, os.O_RDWR, 0666)
	if err != nil {
		panic(err)
	}

	defer f.Close()

	scanner := bufio.NewScanner(f)

	for scanner.Scan() {

		line := scanner.Text()

		if line == path {
			return
		}
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	writer := bufio.NewWriter(f)

	_, err = writer.WriteString("\n" + path)
	if err != nil {
		panic(err)
	}

	err = writer.Flush()
	if err != nil {
		panic(err)
	}
}

func INIT() {
	bytes, err := os.ReadFile(file)

	if err != nil {
		panic(err)
	}

	data := strings.Split(string(bytes), "\n")

	for i := 0; i < len(data); i++ {
		ss := strings.Split(data[i], "/")
		if len(ss) > 0 {
			last := ss[len(ss)-1]
			if len(strings.Trim(last, " ")) > 0 {
				options = append(options, Option{Value: data[i], Text: last})
			}
		}
	}

}

func openIn(dir string) {
	err := os.Chdir(dir)

	cmd := exec.Command("gnome-terminal", fmt.Sprintf("--working-directory=%s", dir))

	// cmd.Stdin = os.Stdin
	// cmd.Stdout = os.Stdout
	// cmd.Stderr = os.Stderr

	err = cmd.Run()

	if err != nil {
		panic(err)
	}
}

func printOptions(selected int) {
	fmt.Println("Please select an option:")

	for i, option := range options {
		if i == selected {
			fmt.Printf("> %s\n", option.Text)
		} else {
			fmt.Printf("  %s\n", option.Text)
		}
	}

}

func getSelection() (string, error) {
	selected := 0
	printOptions(selected)

	for {
		event := termbox.PollEvent()

		switch {
		case event.Type == termbox.EventKey:
			switch event.Key {
			case termbox.KeyEsc:
				termbox.Close()
				os.Exit(0)
			case termbox.KeyArrowUp:
				selected--
				if selected < 0 {
					selected = len(options) - 1
				}
			case termbox.KeyArrowDown:
				selected++
				if selected >= len(options) {
					selected = 0
				}
			case termbox.KeyEnter:
				return options[selected].Value, nil
			default:
				fmt.Println(string(event.Ch))
			}
		}

		fmt.Print("\033[2J\033[H")
		printOptions(selected)
	}
}

func listOptions() {
	err := termbox.Init()

	if err != nil {
		panic(err)
	}

	fmt.Print("\033[2J\033[H")

	INIT()
	value, err := getSelection()

	if err != nil {
		panic(err)
	}

	termbox.Close()

	openIn(value)
}

func main() {
	if len(os.Args) == 1 {
		listOptions()
		return
	}

	switch os.Args[1] {
	case "a":
		pwd, err := os.Getwd()
		if err != nil {
			panic(err)
		}
		addProject(pwd)
	case "r":
		pwd, err := os.Getwd()
		if err != nil {
			panic(err)
		}
		removeProject(pwd)
	default:
		listOptions()
	}
}
