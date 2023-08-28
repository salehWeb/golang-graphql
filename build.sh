#!/bin/bash

go build
if [ $? -eq 0 ]; then
  echo "Go package built successfully"
else
  echo "Go package build failed"
  exit 1 
fi

mv ./pqa /bin/
if [ $? -eq 0 ]; then
  echo "Binary file moved successfully"
else
  echo "Binary file move failed"
  exit 2 
fi
