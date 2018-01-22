# Tangle

**Description:** A social network app that focuses on simplicity.

I'm creating this app so I can use `Test Driven Development`. I've set up Jest and Enzyme to work with CRA using non-default settings. I also want to have true authentication in this app, using JWT mainly.

**Goals:** I'm hoping to gain a much better understanding of testing in general and I believe TTD will make my dev process much more complete. It will definitely be hard work at first, since testing with React can be daunting. It will definitely pay of and I hope to have this small project completed before ~~January 24th~~.

Since my focus is to get comfortable with testing, the app itself will be incredibly simple. The features I definitely plan on having are:

1. Account creation
2. Authenticated Sign In
3. Authenticated Profile updates
4. Users can create posts and comment on other user posts
5. Users can delete their posts or their comments

Most of this will involve saving JWT to localStorage and in Redux then sending the token to be authenticated on each action.

Styling hasn't been decided yet. I could go with a very simple component library if I can find one or stick with my own styling.

I'm looking forward to this project and hopefully it will showcase a more professional and planned side of my skill set.

#### Jan 21st 2018

I've been trying to implement tests for my actions but it's proven to be too complex. It doesn't help that I'm starting with actions where I'm using thunk...or just testing redux in general.

I have a udemy course where I can review testing in detail. It's a section that I previously skipped and it should only take one day to complete if I focus.

This project is on hiatus until I complete that section.

#### update:

I finished the section and it helped...a tiny bit. The course was using mocha and chai but I now realize it's not a huge issue since tests are basically created the same. I think the few differences include the mid of assertions.

I was hoping to gain more insight on how to test actions that invlove multiple dispatches being sent. I think I just need to break down what I decide to test but it' something I'm still looking into.

I also added a few features to this app, after I finished the section of the course.

Users can now sign in as well as the sign in persisting thanks to localStorage. Users can also now create a post.
