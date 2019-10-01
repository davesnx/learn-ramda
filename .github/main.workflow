workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Filter out master branch" {
  uses = "actions/bin/filter@master"
  needs = ["Deploy"]
  args = "branch master"
}

action "Deploy to GitHub Pages" {
  uses = "Cecilapp/GitHub-Pages-deploy@master"
  env = {
    BUILD_DIR = "build/"
    EMAIL = "dsnxmoreno@gmail.org"
  }
  secrets = ["GH_TOKEN_LEARN_RAMDA"]
}
