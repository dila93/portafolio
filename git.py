#!/usr/bin/python

import os, sys

# comment = input('commit name: ');
branch = os.system("git branch | grep \*")
branch = str(branch)
branchs = branch.split(' ');
# Add = os.system('git add .');
# Commit = os.system('git commit -m '+ comment);
# push = os.system()
print branchs;