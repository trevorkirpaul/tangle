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

#### Jan 22nd 2018

I've been trying to add the basics of all features as quickly as I can. I think I'm using container/presnetaional components much better this time and I definitely have a better grasp of seperating concerns.

I'm trying to code "defensively" and this pattern really makes it easier. ALl of my presentational components have simialiar patterns where they'll render a loading view or error view if conditions are present.

One thing that I've not been able to solve has been immediate reloads of certain components.

One example is the DashboardContainer component. On `componentDidMount()` I have it fetching the user profile from the server. The server verifies and finds the userID from the JWT that gets sent with the request.

On the lifecyle method, I'm pulling the JWT from redux so I originally had it coded to only fetch if the token was present. It will always be already present unless the Dashboard component is the first to load, like if a hard reload was used.

Currently, I have it set up to that the token variable first checks redux then checks localStorage:

```javascript
const token = this.props.auth.token || localStorage.getItem("token");
token && this.props.fetchUserInfo(token);
```

This is a simple solution but I wanted to use `componentWillRecieveProps()` to be a backup, where it would fetch if the dashboard doesn't exist but the token does. I ran into some endless loops so I used the simple solution for now.

Regardless of all this work, I do plan on using a HoC for all 'protected routes' so they aren't accessible if a token isn't present or a user isn't signed in

It is good to have multiple lines of defense, just in case, so I'll also create a component to render if an edge case arises where DashboardContainer.js mounts without requesting the user profile.

Feature wise, I need to implement the comment system, like/dislike system, and update/delete user accounts. After that I'll start fleshing out each feature whiles also adding styling.

I'm currently using Material-UI since I know it well enough to use i pretty quickly.

I need to figure out if I want to add in Redux-Form or an alternative sicne I have some forms I want to convert to reusable components.

Hopefully I can finish all of the features today as well as some syling.
