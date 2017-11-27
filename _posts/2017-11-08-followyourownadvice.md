---
title: Follow Your Own Advice
date: 2017-11-08 19:00:00 -05:00
categories:
- blog
- design
- website
layout: post
twitter_desc: Out of all the advice I give I tend to give this one the most often.
twitter_image: 86-00card.jpg
---

Out of all the advice I give I tend to give this one the most often. It's old-school advice drilled into me when I was in college. I pass it along to all my students still because I believe it's just as relevant now to our industry: 

<blockquote class="large">
	<p>Always keep an updated portfolio.</p>
</blockquote>

Even if you're not looking for a job or if you're happy with your company, you should always have an updated portfolio, somewhere. There are many non-obvious benefits:

- It's another opportunity for you to practice
- It gives you a good sense of progress throughout your career
- It helps other Designers by providing examples of what you do
- It helps other disciplines who are interested in our field learn more about our craft and language

In the past four years, though, while I was working at Shopify I didn't follow my own advice. I had a writing portfolio but let my portfolio languish. As a result, when I finally went through this process I found it difficult to describe my projects a year or two or even three out from launch. The broad strokes are there but the details are lost.

Most of the production work was gone because product iterations overwrite. Even my process work had been thrown away, misplaced, or left behind. While I was able to dig up some mock-ups, it wasn't the same and it was tedious to remake them.

I generally try to lead by example. So, here it is again:

<blockquote class="large">
	<p>Always keep an updated portfolio.</p>
</blockquote>

## Goals

The main reason behind this redesign was to add the case studies–I wanted to feel "finished" with my last position and it felt strange to leave a position with no documentation. I also had a sneaking suspicion that the content was overgrowing the last design and I needed to make room for more writing in the future.

My frequent redesigns have been accommodating for doubling content every year. As you can probably tell, I'm more of an <a href="/payingattention">incrementalist than I am a completionist</a>:

<figure>
	<div class="grid">
		<div class="grid__item one-half three--one-fifth">
			<a href="https://dribbble.com/shots/1434766-v3-0-Website-Redesign" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/1434766/website_1x.png" alt="Version 3 of the website"></a>
		</div>
		<div class="grid__item one-half three--one-fifth">
			<a href="https://dribbble.com/shots/2047524-V5-0-Website-Redesign" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/2047524/v5.0-website-redesign_1x.png" alt="Version 5 of the website"></a>
		</div>
		<div class="grid__item one-half three--one-fifth">
			<a href="https://dribbble.com/shots/2525431-V6-0-Website-Redesign" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/2525431/v6_1x.png" alt="Version 6 of the website"></a>
		</div>
		<div class="grid__item one-half three--one-fifth">
			<a href="https://dribbble.com/shots/2697004-V7-0-Website-Redesign" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/2697004/v7_1x.png"></a alt="Version 7 of the website">
		</div>
		<div class="grid__item one-half three--one-fifth">
			<a href="https://dribbble.com/shots/2886184-V8-0-Redesign" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/2886184/fullcircle_1x.png"></a alt="Version 8 of the website">
		</div>
	</div>
</figure>

As I ready myself to write more for <a href="/mailinglist.html">my mailing list</a>, I needed a template that would accommodate for more posts. This meant a better way of dealing with archives and giving people more opportunities to find content that would suit them.

## Content Creation

If there's no content, there's no website. So, I started my project by writing the case studies I didn't have. They were written over the course of two-three weeks as I collected assets in the background. Chantel Hamilton<a id="anchor-1" href="#note-1" class="fieldnotes-anchor">[1]</a> helped me clarify the structure of them and I did one final edit during production after a month break for brevity. 

I wanted something more personable for my website this time so I decided to supplement a photo portrait with a video portrait. I asked my friend to help me shoot and we ended up with these shots:

<div class="grid">
	<div class="grid__item three--three-fifths">
		<figure><img src="/img/post/86-portrait.jpg" alt="My initial potrait shot"></figure>
	</div>
	<div class="grid__item three--two-fifths">
		<figure><img src="/img/post/86-portraitgif.gif" alt="My first video portrait"></figure>
	</div>
</div>

After sitting with the pictures a bit I wasn't too satisfied so I messaged my other friend Jeremiah<a id="anchor-2" href="#note-2" class="fieldnotes-anchor">[2]</a> to meet me in my soul place, the desert. He shot a new video and portrait for me and I retouched them for the website.

## Style Decisions

Visual design is a series of decisions made one after another to craft a look and feel. A lot of these decisions were made in previous iterations. I don't always have to start over because I carry forward the decisions I still agree with (that's the joy of working in iterative chunks.) 

After doing some sketches on paper I started laying things out in Photoshop:

<div class="grid">
	<div class="grid__item three--one-half">
		<figure><img src="/img/post/86-firstiteration.jpg" alt="first iteration of the main pages"></figure>
	</div>
	<div class="grid__item three--one-half">
		<figure><img src="/img/post/86-firstiteration2.jpg" alt="second iteration of the pages"></figure>
	</div>
</div>

After a couple of weeks, I didn't particularly enjoy the direction I was going in so I went back to zero. I dumped everything and started over pushing myself to play a bit more with depth, reduce the colour complexity, and increase the spacing.

<figure>
	<img src="/img/post/86-seconditeration.jpg">
</figure>
<figure>
	<img src="/img/post/86-seconditeration2.jpg">
</figure>

After a day or so of sprinting, I felt a lot better about the direction and quickly put together the rest of the pages.

## Style Guide & Development

<figure class="left two-fifths three--one-fifth">
	<a href="https://dribbble.com/shots/3914162-V9-0-Style-Guide" class="wimage"><img src="https://cdn.dribbble.com/users/144905/screenshots/3914162/helen9-styleguide.jpg" alt="Snapshot of my style guide"></a>
</figure>

Before I jumped into code, I wanted to double-check that I hadn't introduced any unnecessary styles so I built a small style guide to compare styles. I went back and forth between the style guide and my mock-ups to ensure I'm more or less following the rules but <em>I didn't break my back.</em> There are diminishing returns if I try to be pixel-perfect with a mock-up made for myself.

After that I was in development mode. This website is built using HTML + SCSS using Jekyll and Github pages all of which I've made available on it's Github repo<a id="anchor-3" href="#note-3" class="fieldnotes-anchor">[3]</a> for reference purposes.

The only thing particularly unique for my website is that I designed on and developed with an 11-column grid. I've done this for a very long time because I generally find even-numbered grids to be stifling. I altered csswizardry's grid<a id="anchor-4" href="#note-4" class="fieldnotes-anchor">[4]</a> to accommodate.

## Launch

The complete project cost me about 120 hours from start to finish inclusive of the writing I did (minus the photoshoot). I still have a few things to work on (accessibility & performance review, better sharing images for Twitter, etc.) but I'll work on them as I go.

Seriously though,

<blockquote class="large">
	<p>Always keep an updated portfolio.</p>
</blockquote>

<hr class="small">

<div class="fieldnotes">
    <p id="note-1"><a href="#anchor-1" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[1]</span> <a href="http://afterwordscommunications.com/" class="external" target="_blank"><span class="external-body">Chantel Hamilton's</span> <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a> website</p>

    <p id="note-2"><a href="#anchor-2" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[2]</span> <a href="http://jeremiahwarren.com/" class="external" target="_blank"><span class="external-body">Jeremiah Warren's</span> <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a> website</p>

    <p id="note-3"><a href="#anchor-3" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[3]</span> For reference purposes only, you can see the code behind this website on <a href="https://github.com/tranhelen/tranhelen.github.io" class="external" target="_blank">&#8220;<span class="external-body"><em>Github</em></span>&#8221; <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a></p>

    <p id="note-4"><a href="#anchor-4" class="footnote-back">&#8617;&#xFE0E;</a> <span class="footnote">[4]</span> <a href="https://github.com/csswizardry/csswizardry-grids" class="external" target="_blank"><span class="external-body">czzwizardry's grid</span> <span class="external-box"><span class="external-box__arrow">↗&#xFE0E;</span></span></a></p>
</div>