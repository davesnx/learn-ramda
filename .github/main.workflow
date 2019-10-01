workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Build" {
  uses = "actions/npm@e7aaefe"
  args = "run build"
  needs = ["Install"]
}

action "Deploy" {
  uses = "nchaulet/github-action-gh-pages@master"
  secrets = [
    "GITHUB_TOKEN",
  ]
  needs = ["Build"]
  env = {
    PUBLIC_PATH = "build"
  }
}
