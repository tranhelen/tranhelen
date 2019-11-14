---
layout: post
title: IAP, Apple, and Other Fuck-ups
date: 2019-11-10
excerpt: 18 months have gone past and we're at month 19 at Jupiter. We've made some mistakes. I wish it was the software that was the hard part...
---

18 months have gone past and we're at month 19 at Jupiter. We've made some mistakes.

I _wish_ it was the software that was the hard part but most of the challenge appears to be in balancing creating the software and creating the business in tandem. From what is found online it appears people usually fall short in design and marketing: not talking to their customers enough. That isn't a weakness of ours, fortunately, yet mistakes abound regardless.

<div class="note">
    <p>While I get my position makes this hard to understand, this post does not speak for anyone else at the company. I'd imagine they have their own thoughts and reflections around this whole process.</p>
</div>

## Fuck-up #1: Mobile-first.

Mobile apps come with a huge barrier: the TestFlight beta app. I can't tell you enough how much I loathe this app. Even the most motivated users don't like the idea of downloading an app to download another app and it's completely unclear what value they get out of the process anyway.

When originally starting the design work, I made an assumption that we should build mobile-first. This is a belief I've held my whole working career. Watching our customers led me to the same conclusion: they had no time to sit down and look at a desktop administrative app.

Unfortunately this decision means we're at the mercy of that beta experience. We still managed to get people to use it and have since been iterating only to realize open availability would involve another hurdle because:

1. **You cannot release a SaaS product whose main product is a mobile app without using the Apple In-App Purchase API's.** There is no work-around.<span class="cite"><a href="#note-1" name="back-1">1</a></span>
2. Expo didn't support the IAP API with managed builds.

Mobile-first + Expo cost us weeks.

## Fuck-up #2: We took too long to ask for money.

The app was designed by its market because we picked them first. The features came from these conversations and were direct requests. Some of them were designed based off observation.

Rich and I spent the first 'stage' of Jupiter building together from April 2018 - November 2018 while talking to customers along the way. 8 months. The MVP was past done by this point (from my recollection) and it still took us 3 months after that to open up payments.

The hang-up was over-worry about the state of the MVP and our _non-brand_. It took a poking friend for us to open up the gateway. People gave us money. We sold 14 yearly subscriptions in our first week.

## Fuck-up #3: We hired the wrong people.

We suck at hiring. I've been informed after many chats with objective bystanders that hiring is the plague of any entrepreneur's career.

**There are not many people who fit into a start-up.** Sometimes it's not even that they're not a good fit... it's that they're not a _great_ fit and the bank is limited. I'm not even sure there are that many qualifications. This person needs to:

- Have practical skills and can produce at a speed typically found in those with ~3+ solid years of practice and still want to do it most of the day
- Need very little to no management
- Have zero hesitations about figuring things out when blocked
- Is intrinsically motivated by _something_
- Is bearable to be around

I'm pretty sure that's it. And we have sucked trying to find them. And letting them go hurts on levels I didn't anticipate. (<a href="http://tryjupiter.com/about.html">Oh hey, are you this developer?</a>)

## Fuck-up #4: We're still taking too long.

I stopped driving traffic to the .com because I couldn't justify the money spent on a product which still had the TestFlight block on it. What we should have done immediately after selling our first subscriptions was work on opening up the product.

We did not do that because we fell into the trap laid specifically for R&D Founder Duos: build more features! This compounded with fuck-up #3 wasted time and fuck-up #1 was a roadblock to catching up.

Why did we wait though? We were already selling.

And what if, after all this delay, we find it's not going to sell _more_? I'm happy to fail if I do but I can't tell if we're failing yet. All signals are warm-<em>ish</em>.

## Fuck-up #5: TBA

**I thought I was going to be better.** Writing this post is embarassing but I publish it because it gives me a sense of accountability. Maybe now I won't make the same mistakes. Or maybe I will, still, until I figure out how to mitigate my biggest weaknesses.

<hr class="--small">

I still love what we've built. I still love my market. I still want to do this. My loyalty to this company won't fade but... I'm tired of the slow ramp of death. Every day feels _more forever_ than the _forever_ day before it. I think we could have been in this position a few months ago had we made better decisions.

I'm convinced start-up founders raise money or create busywork for themselves because of the _forever_ nature of building a SaaS company and they're trying not to die of frustrated boredom. If you're tackling a problem more complex than a single note, it takes longer than you want it to. And that sucks.

<hr class="--end">

<div class="citations">
    <p><a name="note-1" href="#back-1" class="citations-back">&#x21A9;</a> 1 No, having billing on a web app with no features doesn't work. We thought of this too. We realized too late that everyone who suggested this route had built their web apps first and the mobile app was an addition after. Their suggestions didn't apply to us.</p>
</div>