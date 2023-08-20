package main

import (
	"fmt"
	"os"
	"os/exec"
	"github.com/nsf/termbox-go"
)

type Option struct {
	Text  string
	Value string
}

func openDiRWithNvim(dir string) {
    err := os.Chdir(dir)
    cmd := exec.Command("nvim", ".")

    cmd.Stdin = os.Stdin
    cmd.Stdout = os.Stdout
    cmd.Stderr = os.Stderr

    err = cmd.Run()

    if err != nil {
        panic(err)
    }
}

var options = []Option{
	{"Option 1", "1"},
	{"2", "/home/salih/Desktop/progrims/temps"},
	{"Option 3", "3"},
	{"Option 4", "4"},
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

func main() {
	err := termbox.Init()

	if err != nil {
		panic(err)
	}

	fmt.Print("\033[2J\033[H")

	value, err := getSelection()

	if err != nil {
		panic(err)
	}

	termbox.Close()

    openDiRWithNvim(value)
}
