# just file for managing this repo with just
# more info:
#   - https://github.com/casey/just
#   - https://just.systems/man/en/

# NOTE: need bash on GHActions and can use just --shell \"bash\" but will not
# work when just calls just
set shell := ["zsh", "-uc"]

# user and repo
user        := `whoami`
current_dir := `basename $( pwd )`

# Colors
RED     := "\\u001b[31m"
GREEN   := "\\u001b[32m"
YELLOW  := "\\u001b[33m"
BLUE    := "\\u001b[34m"
MAGENTA := "\\u001b[35m"
BOLD    := "\\u001b[1m"
RESET   := "\\u001b[0m"

_default:
    @echo "\nHi {{GREEN}}{{user}}!{{RESET}} Welcome to {{RED}}{{current_dir}}{{RESET}}\n"

    @just --list --unsorted

# run dev mode
@dev:
    npm install
    PORT=3030 npm run dev

# run cypress E2E specs
cypress-e2e:
    npm run cypress:open -- --browser chrome --e2e

# run cypress build
cypress-run:
    npm run cypress:run

# full build
build:
    npm install
    npm run lint
    npm test -- --run
    npm run build