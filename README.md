# tntweb.com

TNT Web Development, Design, Artistry

# Something Else


# Git workflow for working with multiple people

This sets the current PR to be at the head of the main branch and allows for merging conflicts on local machine without overwriting other people's work >:)

## Rebasing

After you commit your changes to your feature branch `<some-feature-branch>`

checkout the main branch (or whatever branch you want to smoothly merge to)
```Bash
git checkout main
```
Pull in the new stuff
```Bash
git pull origin main
```

Checkout your feature and rebase main to it

```Bash
git checkout <some-feature-branch>
git rebase main
```

Git will whine about merge conflicts, fix them and repeat these steps until git stops whining:

```Bash
git add <file-name>   # stage the merged conflicts
git rebase --continue # move to the next commit 
```

Then (force, if a PR is already made and the remote branch already exists NOT IF OTHER PEOPLE HAVE BASED work off of it i.e. they have already pulled the branch and merged it into their work or something) push the merged conflicts to the remote branch:

```Bash
git push --force-with-lease origin <some-feature-branch>
```

And make a PR / request merge to main using GitHub's UI
