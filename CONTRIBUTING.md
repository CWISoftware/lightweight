# Contributing to **lightweight**

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved!

## Using the issue tracker

Use the issues tracker for:

* [bug reports](#bug-reports)
* [submitting pull requests](#pull-requests)

Please **do not** use the issue tracker for personal support requests nor feature requests. Support requests should be sent to:

* [![Join the chat at https://gitter.im/CWISoftware/lightweight](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CWISoftware/lightweight?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Feature requests can be discussed on [the lightweight-core mailing list](https://gitter.im/CWISoftware/lightweight).

We do our best to keep the issue tracker tidy and organized, making it useful
for everyone. For example, we classify open issues per application and perceived
difficulty of the issue, making it easier for developers to
[contribute to lightweight](#contributing).

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; [check if the issue has already been
   reported](https://github.com/CWISoftware/lightweight/search?type=Issues).

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   `master` branch in the repository.

3. **Isolate and report the problem** &mdash; ideally create a reduced test
   case.

Please try to be as detailed as possible in your report. Include information about
your Operating System, your node, npm, sass and lightweight versions. Please provide steps to
reproduce the issue as well as the outcome you were expecting! All these details
will help developers to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the environment in which it occurs. If suitable,
> include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case (e.g. a GitHub Gist)
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome and should be discussed on [the lightweight-core mailing list](https://gitter.im/CWISoftware/lightweight). But take a moment to find
out whether your idea fits with the scope and aims of the project. It's up to *you*
to make a strong case to convince the community of the merits of this feature.
Please provide as much detail and context as possible.

## Contributing

We incentivize everyone to contribute to lightweight and help us tackle
existing issues!

In case you are changing a single file, you can run tests only
for that particular file for fast development cycles. For example, if you
are changing the Person controller , you can compile it and run its tests as:

    $ gulp test

After your changes are done, please remember to run the full suite with
`gulp test`.

You can always check [the official build status on Travis-CI](https://travis-ci.org/CWISoftware/lightweight).

With tests running and passing, you are ready to contribute to lightweight and
send your pull requests.

## Contributing Documentation

Keep in mind that the first paragraph might show up in a summary somewhere, long
texts in the first paragraph create very ugly summaries. As a rule of thumb
anything longer than 80 characters is too long.

Try to keep unnecessary details out of the first paragraph, it's only there to
give a user a quick idea of what the documented "thing" does/is. The rest of the
documentation string can contain the details, for example when a value and when
`nil` is returned.

This makes it easy to test the examples so that they don't go stale and examples
are often a great help in explaining what a function does.

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**NOTE**: Do not send code style changes as pull requests like changing
the indentation of some particular code snippet or how a function is called.
Those will not be accepted as they pollute the repository history with non
functional changes and are often based on personal preferences.

**IMPORTANT**: By submitting a patch, you agree that your work will be
licensed under the license used by the project.

If you have any large pull request in mind (e.g. implementing features,
refactoring code, etc), **please ask first** otherwise you risk spending
a lot of time working on something that the project's developers might
not want to merge into the project.

Please adhere to the coding conventions in the project (indentation,
accurate comments, etc.) and don't forget to add your own tests and
documentation. When working with git, we recommend the following process
in order to craft an excellent pull request:

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/lightweight
   # Navigate to the newly cloned directory
   cd lightweight
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/CWISoftware/lightweight
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off of `master`) to contain your feature, change,
   or fix.

   **IMPORTANT**: Making changes in `master` is discouraged. You should always
   keep your local `master` in sync with upstream `master` and make your
   changes in topic branches.

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Keep your commit messages organized,
   with a short description in the first line and more detailed information on
   the following lines. Feel free to use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

5. Make sure all the tests are still passing.

   ```bash
   gulp test
   ```

   This is needed to ensure your changes can pass all the tests.

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

8. If you haven't updated your pull request for a while, you should consider
   rebasing on master and resolving any conflicts.

   **IMPORTANT**: _Never ever_ merge upstream `master` into your branches. You
   should always `git rebase` on `master` to bring your changes up to date when
   necessary.

   ```bash
   git checkout master
   git pull upstream master
   git checkout <your-topic-branch>
   git rebase master
   ```

We have saved some excellent pull requests we have received in the past in case
you are looking for some examples:

* https://github.com/CWISoftware/lightweight/pulls/

Thank you for your contributions!
