#!/bin/sh -e

usage() {
  echo "OVERVIEW: Build apps according to BUILD_ENV value. Meant to be used for Heroku deployment"
  exit
}

if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
  usage
fi

(
  PROJECT_ROOT="$(cd $(dirname $0)/..; pwd)"

  cd $PROJECT_ROOT

  if [ "$BUILD_ENV" = "web-client" ]; then
    yarn workspace web-client build
  elif [ "$BUILD_ENV" = "api" ]; then
    yarn workspace api build
  else
    echo "Error: no build config for INATO_BUILD_ENV value '$INATO_BUILD_ENV'"
    exit 1
  fi
)