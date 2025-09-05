#!/bin/bash

function print() {
  local message=$1

  echo -e "\033[34minstall-vercel.sh\033[0m" "${message}"
}

# Function to pull public submodule
function handle_public_submodule() {
    local parent_path=$1
    local submodule_name=$2

    print "pulling submodule ${submodule_name}"

    cd ${parent_path}
    rm -rf ${submodule_name}
    git submodule update --init ${submodule_name}

    cd -
}

# Function to perform bun install and link
function bun_install_and_link() {
    local folder=$1
    local links=$2
    local should_run_bun_link=$3

    cd ${folder}
    print "bun install for ${folder}"
    bun install --omit=dev

    if [ "${should_run_bun_link}" = "true" ]; then
        print "Running bun link for ${folder}"
        bun link
    fi

    for link in ${links[@]}
    do
        print "bun link for ${folder} -> ${link}"
        bun link ${link}
    done

    cd -

    return 0
}

#########################################
# Start of script                       #
#########################################

# Stop execution on error - don't let it build if something goes wrong
set -e

# Go to root directory
cd ..

# Install submodules
handle_public_submodule "." "drift-common"

# Install common-ts
bun_install_and_link "./drift-common/common-ts" "" "true"

# Install UI
bun_install_and_link "./ui" "@drift/common" ""

echo "Installation complete"