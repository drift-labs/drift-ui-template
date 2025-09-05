#!/bin/bash

print_message() {
    local script_name=$1
    local message=$2
    echo -e "\033[34m#task - (${script_name}): ${message}\033[0m"
}

# Function to perform build tasks
build() {
    local folder=$1
    local build_cmd=${2:-"build"} # build cmd defaults to "build" if nothing provided
    local additional_cmd=$3

    cd ${folder}
    
    echo "Current directory: $(pwd)"
    print_message "build-vercel.sh" "Building :: folder:${folder}, build_cmd:${build_cmd}, additional_cmd:${additional_cmd}"
    
    if [ -n "${additional_cmd}" ]; then

        ${additional_cmd}
    fi

    bun run ${build_cmd}
}

print_message "Node version:"
node -v

# Build tasks
base_directory=$(pwd) # EXPECT THIS TO BE THE UI FOLDER

build "../drift-common/common-ts" "" ""
cd ${base_directory}

build "." "build" ""
cd ${base_directory}


print_message "Build completed."