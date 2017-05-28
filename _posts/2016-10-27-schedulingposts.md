---
title: Scheduling Posts with Jekyll and Github Pages
date: 2016-10-27 00:00:00 Z
categories:
- blog
- website
layout: subpage
---

My website is built on Jekyll and Github Pages. Jekyll allows you to assign a date of publication on a post but Github Pages won't automatically push this post on that date for you. I have been wishing for ways to publish my editorial schedule without babysitting. I ran into a post<a id="anchor-1" href="#note-1" class="fieldnotes-anchor">[1]</a> which promised what I was looking for but it didn't quite work for my requirements:

- My posts need to be stashed somewhere that can be accessed remotely in case I need to do last minute edits.
- Posts need to be published on a specific date without me having any interaction with a computer or running a server. Hands-off solution.
- No CMS. I'd rather publish late or when I get back in front of my computer than do this. I prefer lightweight solutions.

## East 5th's Solution

After some experimentation, I noticed the solution broke when I needed to schedule multiple posts in the future.

The blog post details you having to put your posts into one branch (`schedule`) and then Zapier creates a PR and pushes it on a specific date indicated by your commit message. 

Problem is, if you commit multiple posts ahead of time it pushes all your posts into master, not just the scheduled one. When the _second date_ rolls around, `schedule` has no changes. When a PR has no changes, Git won't merge it.

To get around this, you could make an empty commit to `schedule` on the date of publication. Unfortunately, there is no way to do this gracefully without running a server and writing a script.

After some serious frustrating spells, I managed to get this set up and working. To get scheduling, you'll have to set up two zaps on Zapier.

## Zap 1

### Trigger when new branches are created

To schedule a new post, work in a branch identified with the word Schedule and the date:

`git checkout -b 'Schedule(10/27/2016)'`

Unlike East 5th's solution, which watches commits, using branches as a trigger helps avoid any errors created by watching commits. Adjustments can be made up until the date of publication and it won't matter.

Set up the first Zapier to trigger when you create a new branch. Before you continue, ensure that you already have created a Branch on your repo named like this or the next step won't display the named variable<a id="anchor-2" href="#note-2" class="fieldnotes-anchor">[2]</a> you're looking for.

<img src="img/post/60-01.jpg" alt="Set up a trigger" class="img-border">

### Create a calendar event

The next step is connecting to your Google calendar and creating a detailed event with the time and date of your post. I decided to create a new calendar to govern my editorial schedule but you can choose any calendar.

In the `Summary` field I put the word `Scheduled:` and the `sha` but this is only for my own identification. You can use whatever you want. In the `Description` field, select the `Name` of the branch (use the drop-down on the right for a full list of variables).

<img src="img/post/60-02.jpg" alt="Create a calendar event" class="img-border">

In the `Start Date & Time` and `End Date & Time` fields, I chose `Name Schedule` from the list of variables.

<img src="img/post/60-03.jpg" alt="Pick a time" class="img-border">

When testing this, you should see a calendar event appear at _midnight_ on the date identified by your branch name.

## Zap 2

### Run the calendar check everyday

If you post only on a day of the week, you can alter this to whatever timeframe you like.

<img src="img/post/60-04.jpg" alt="Assign a check-in date" class="img-border">

### Find the next event which matches today's date

Next search your calendar for Events with a description that matches today's date. This matches the value of your Branch name.

<img src="img/post/60-05.jpg" alt="Match the date" class="img-border">

### Update that previous event with an additional identifier

If the previous step isn't true the Zapier still continues. To stop this if it didn't find an event, we have to update the event in the previous step and add a value to check agianst. I store the words `Go ahead` in the `Location` field.

<img src="img/post/60-06.jpg" alt="Update the event" class="img-border">

### If any of the above didn't work as intended, stop

Add a filter to stop the process if your `Location` doesn't have the words `Go ahead`.

<img src="img/post/60-07.jpg" alt="Add a filter" class="img-border">

### Create a PR and merge automatically

Last step is to create a pull request which looks for that specific `head` name and only merges if it matches the `Event Description` in Step 2.

<img src="img/post/60-08.jpg" alt="Match the PR and merge" class="img-border">

*If you don't add the Boolean check, your PR will merge if it detects any event regardless of whether or not it matches today's date.*

## Limitations

There are a couple of things I'm still a little wary about with this approach:

- If for any reason there are any conflicts, the post won't be published. My marketing (mailchimp and tweets) depend on the post publishing and so this not working could set off a series of errors. I'm looking into this.
- While you can set your Zap to check at a specific time, you can't do this for each post. For me, this isn't important but if you need to specify times, you'll need to find your own way. Sorry.

*<strong>Disclaimer</strong>: Testing this is a pain in the ass and trusting it is a whole different story altogether. Proceed with caution and please test on your own.*

## Does It Work?

If you're reading this post, it works. Sick. I have scheduled my last three posts on specific dates while I was away in Utah and California. If you have suggestions on how I can better optimize this flow, give me a heads up.

Thanks to the Peter Corey for starting this and Larry Marbuger<a id="anchor-3" href="#note-3" class="fieldnotes-anchor">[3]</a> for guiding me in the right direction.

<hr class="small">

<div class="fieldnotes">
    <p id="note-1" class="h6"><a href="#anchor-1" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[1]</span> Peter Corey, <a href="http://www.east5th.co/blog/2014/12/29/scheduling-posts-with-jekyll-github-pages-and-zapier/" class="external" target="_blank">&#8220;<span class="external-body"><em>Scheduling Posts with Jekyll Github Pages and Zapier</em></span>&#8221; <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a>, 12/29/2014</p>

    <p id="note-2" class="h6"><a href="#anchor-2" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[2]</span> Named variables are something Zapier uses, this is <a href="https://zapier.com/help/named-variables/" class="external" target="_blank"><span class="external-body">explained here</span> <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a></p>

    <p id="note-3" class="h6"><a href="#anchor-3" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[3]</span> Larry Marburger's <a href="https://twitter.com/lmarburger" class="external" target="_blank"><span class="external-body">Twitter</span> <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a></p>
</div>