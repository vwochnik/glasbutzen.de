#!/bin/bash

if [ ! -f ~/.sitecopy ]; then
  mkdir -p ~/.sitecopy
  chmod 0700 ~/.sitecopy
fi

cd "$(dirname "$0")"
chmod 0600 .sitecopyrc
sitecopy -r .sitecopyrc -o --update glasbutzen.de
