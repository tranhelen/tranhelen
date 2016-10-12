---
layout: subpage
title: Scheduling Posts with Jekyll and Github Pages
category: [blog, website]
slug: scheduling-posts
---
My website is built on Jekyll and Github Pages. I had been wishing for ways to publish an editorial schedule through my website without intervention. I ran into [this post](http://www.east5th.co/blog/2014/12/29/scheduling-posts-with-jekyll-github-pages-and-zapier/) which promised what I was looking for but I ran into limitations.

Jekyll allows you to assign a date of publication on a post but Github Pages won't automatically push this post on that date for you. 

- I'm getting into the rhythm of writing posts before they're published. These need to be stashed somewhere that can be accessed remotely in case I need to do last minute edits.
- Posts need to be published on a specific date without me having any interaction with a computer or running a server. Hands-off solution.
- I didn't want to install a CMS to schedule posts. I'd rather publish late or when I get back in front of my computer than do this. I prefer lightweight solutions.

## East 5th's Solution

After some experimentation, I noticed that [Peter Corey](http://www.east5th.co/blog/2014/12/29/scheduling-posts-with-jekyll-github-pages-and-zapier/)'s post mentioned above wouldn't help me. The solution broke when I needed to schedule multiple posts in the future.

The blog post details you having to put your posts into one branch (`schedule`) and then [Zapier](https://zapier.com/) creates a PR and pushes it on a specific date indicated by your commit message. 

Problem is if you commit multiple posts ahead of time it pushes all your posts into master, not just the scheduled one. When the _second date_ rolls around, `schedule` has no changes. When a PR has no changes, Git won't merge it.

To get around this, you would have to make an empty commit to `schedule` on the date of publication in order for the PR to merge. Unfortunately, there is no way to do this gracefully without running a server and writing a script.

After some serious frustrating spells, I managed to get this set up and working. To get scheduling, you'll have to set up two zaps on Zapier.

## Zap 1

### Trigger when new branches are created

To schedule a new post, work in a branch identified with the word Schedule and the date:

`git checkout -b 'Schedule(10/27/2016)'`

Unlike East 5th's solution, which watches commits, using branches as a trigger helps avoid any errors created by watching commits. Adjustments can be made up until the date of publication and it won't matter.

Set up the first Zapier to trigger when you create a new branch. Before you continue, ensure that you already have created a Branch on your repo named like this or the next step won't display the [named variable](https://zapier.com/help/named-variables/) you're looking for.

<img src="img/post/60-01.jpg" alt="Set up a trigger" class="img-border">

### Create a calendar event

The next step is connecting to your Google calendar and creating a detailed event with the time and date of your post. I decided to create a new calendar to govern my editorial schedule but you can choose any calendar.

In the `Summary` field, identify the post with the word `Scheduled:` again, which is what you'll be searching for later. I personally store the `sha` in the summary as well but this is not necessary. In the `Description` field, select the `Name` of the branch (use the drop-down on the right for a full list of variables).

<img src="img/post/60-02.jpg" alt="Create a calendar event" class="img-border">

In the `Start Date & Time` and `End Date & Time` fields, I chose `Name Schedule` from the list of variables.

<img src="img/post/60-03.jpg" alt="Pick a time" class="img-border">

When testing this, you should see a calendar event appear at _midnight_ on the date identified by your branch name.

## Zap 2

### Do this every day

I publish my posts generally on Monday but this post is posting on a Wednesday so I set it to every day.

<img src="img/post/60-04.jpg" alt="Assign a check-in date" class="img-border">

### Find the next event which matches today's date

Next search your calendar for Events with a description that matches today's date. This matches the value of your Branch name.

<img src="img/post/60-05.jpg" alt="Match the date" class="img-border">

### Update that event with an additional identifier

For some reason, if the previous step isn't true, the Zapier still continues. To add something to do a Boolean check identify the event in the previous step with the words, `Go ahead` by updating the event.

<img src="img/post/60-06.jpg" alt="Update the event" class="img-border">

### Stop if this isn't true

Add a filter to stop the process if your Event Description doesn't have the words `Go ahead`.

<img src="img/post/60-07.jpg" alt="Add a filter" class="img-border">

### Create a PR and merge automatically

Last step is to create a pull request which looks for that specific `head` name and only merges if it matches the `Event Description` in Step 2.

<img src="img/post/60-08.jpg" alt="Match the PR and merge" class="img-border">

*If you don't add the Boolean check, your PR will merge if it detects any event with a matching description in Step 2 regardless of whether or not it matches today's date.*

## Limitations

There are a couple of things I'm still a little wary about with this approach:

- If for any reason there are any conflicts, the post won't be published. My marketing (mailchimp and tweets) depend on the post publishing and so this not working could set off a series of errors. I'm looking into this.
- While you can set your Zap to check at a specific time, you can't do this for each post. For me, this isn't important but if  you need to specify times, you may have to do what [East 5th](http://www.east5th.co/blog/2014/12/29/scheduling-posts-with-jekyll-github-pages-and-zapier/) did.

## Does It Work?

If you're reading this post, it works. Sick. I have scheduled my last three posts on specific dates while I was away in Utah and California. Thanks to the [Peter Corey](http://www.east5th.co/blog/2014/12/29/scheduling-posts-with-jekyll-github-pages-and-zapier/) for starting this and [Larry Marbuger](https://twitter.com/lmarburger) for guiding me in the right direction.