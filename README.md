1. update original code from local to remote
--------------------------------------------------------------------------------------------
    git init
    git add [file]
    git commit -a -m “origin"
    git remote add origin1 https://github.com/Ham55665566/work_for_git.git
    git push -u origin1 master 
--------------------------------------------------------------------------------------------
2. update modified code from local to remote

    git commit -a -m “origin2"  (這一行是筆記的意思) 
    git remote add origin2 https://github.com/Ham55665566/work_for_git.git
    git push -f -u origin2 master
 -------------------------------------------------------------------------------------------- 
 3. git functions
 
    查看目前git電腦使用者
    cat ~/.gitconfig
 
    由git commit上刪除檔案
    git rm –cached [檔案]
 -------------------------------------------------------------------------------------------- 

