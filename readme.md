![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Guided exercise - IronSkydive 💪 - block and inline level elements

<br>

## Introduction

During this module, you will get familiar with HTML & CSS. Both technologies combined offer you all the tools you need to create a website. HTML without CSS is ugly, and CSS without HTML is... well, nothing!

That is why you will be working on this exercise on multiple occasions during this module. Our end goal is to create a basic HTML & CSS website, where you will practice the various concepts as you are learning them.

<br>

## IronSkydive | The Company Website

Ironhack loves coding, but we also like to practice extreme sports. In a new line of products, we have created a new company called _IronSkydive_. We offer a full skydiving experience.

We are hoping you could help us to create our website because we are swamped starting the company and making sure that all our papers are aligned with the rules. :see_no_evil:

As we mentioned earlier, you'll be working on this exercise through the next couple of lessons, but in the end, your goal is:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1f30ebb21258466ca36702d7cdaa0cad.png)

<br>

You will be working on a new pen, so proceed to [CodePen](https://codepen.io/) and create a new pen now. Ready to take the jump?

<br>

![](https://media.giphy.com/media/xT5LMrGIfLuDtRSAMg/giphy.gif)

<br>

### Part 1 - Block Elements

In this part of the exercise, you are going to work with the block elements you learned. You have seen how the semantic block elements help us s to understand our website's composition better. Let's start by creating the basic HTML structure, which will be the following:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br>

Later on, in the exercise, we are going to distinguish between the different sections we have. Now, let's add a few more block elements inside each element.

### Nav

Inside `<nav>`, create a `<ul>` tag with three elements:

- Day Structure
- Team
- Schedule

These are going to be our menu options.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ace26745798b17492d307e0d0c817ea4.png)

<br>

### Header

You have to create two different things here:

- first, create an `<h1>` tag with the text "IronSkydive", then
- under this tag, create a `<h2>` tag with the text "Let the trip begin" and finally
- under these tags, create an `<aside>` tag that will contain a quote.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3c0c7f97d3804c728475f52c89f0ec85.png)

<br>

### Section 1

This section has a dark background that will cover the whole width of the website. Later you will add the color to the background, so for now, no need to worry about this.

<!-- To create this effect, later on, we are going to create a container inside the section. This wrapper will be handy to set a specific width and center all the content in the screen when we get to CSS later on. -->

It will contain three `<article>` tags to add the information under the header.

Inside each `<article>`, add an `<h3>` tag for the different titles, and a paragraph for the white text. The result would be something like this:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_f004e36a2b2bb0dfc02ac008e5d5c97e.png)

<br>

### Section 2

This section is quite similar to the previous one. In this case, the section will contain a `<h3>` title with the text "How do we structure the day?", and then a `<div>` with four different `<article>` tags.

Inside each _article_ tag, for the moment, we are going to have a `<h4>` tag with the article title, and a `<p>` tag with the article content.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c810d2f904e4c4e72ad8b9ed055e4b37.png)

<br>

### Section 3

This case is the same as **Section 1** - it will have a dark background, and, as in the previous sections, you have to add a `<h3>` title and a `<p>` with a brief description.

Then, you will create `<div>` tag and add three empty `<article>` tags that will contain the information of each team member. It is enough to have a text indicating the different articles:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4bf21e881db9707b671a812c022db35f.png)

<br>

### Section 4

In this section, we have a table that contains the schedule.

Let's start with adding two different `<h3>` headings with the text:

- Schedule
- Schedule a Time Slot

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_cdeeac1a34e5b4f5785ec6f203632b7c.png)

<br>

Now add a table under the first `<h3>` tag, that contains the text "Schedule". Indeed, this table is going to contain the IronSkydive schedule for the week. The format of the table is the following:

| Time          | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| ------------- | ------ | ------- | --------- | -------- | ------ | -------- |
| 9:00 - 11:00  |        |         | X         |          | X      | X        |
| 12:00 - 14:00 |        |         |           |          | X      | X        |
| 15:00 - 17:00 |        |         | X         | X        | X      | X        |

Create the table and add the necessary content to get this result:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5c089d05a9df991db3784ba81a880835.png)

<br>

Remember, besides `<table>` tag, you should use `<thead>` with six `<th>` tags for the header rows (six days that IronSkydive operates), and then inside _body_ of the table (`<tbody>`) you should define rows with `<tr>` tags. In the end, you should use `<td>` tags for the content inside the rows.

### Footer

Last but not least, the footer section has to contain just one `<section>` tag. Inside the `<section>`, you have to add several things (described in the correct order):

- `<h5>` with the title "Contact Information".
- [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) element, with the correct information:
  _IronSkydive 33 Rue la Fayette, 75009 Paris, France +33 (0) 619 193 088_
- `<h5>` with the title "Follow Us".
- `<ul>` list with three elements:
  - Twitter.
  - Facebook.
  - Instagram.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_661b4572e673afb0ce5a419ae78b9ce8.png)

<br>

### Part 2 - Inline Elements

In the second iteration of our exercise, you are going to work with the inline elements you learned. You have seen that we use different tags with different goals. Remember, this is our current project structure:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br>

You are going to add different inline elements to all the sections we already have.

### Nav

The `<nav>` tag is used to wrap links on our website. Right now, we have just a list of elements. Let's change this, by adding _links_ in each list item.

You have to create three different links, that will be pointing to `#structure`, `#team`, and `#schedule`, respectively:

:bulb: Spoiler: _links_ are _anchor_ tags and represented with `<a>` tag and need to have `href` attribute. :wink:

```html
<a href="#structure">Day Structure</a>
```

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_53837d5c2b9d5e3c537a87079080151e.png)

<br>

### Header

The header of the project is incomplete. First, you need to add a logo to the header. Also, add a _testimonial style quote_ where you currently have filler text.

**First, the logo.** Add an image inside the `<h1>` that loads the following image:

`https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironhack-skydive-logo.png`.

Remember to add a descriptive alternative text, just in case the image doesn't load. A good option would be "IronSkydive Logo".

It is common to find quotes in _italic_ in different places, so this is what we are going to do. Add the quote in italic (using inline elements) inside the `<aside>` element, with the text "The best experience of our lives".
In a new line, this time using a _block_ level element (`<p>`), add the names of the authors. The names will be "Ariel Quiónes & Gonzalo Manrique, Ironhack Founders".

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0f0563ef2d64bd9a7bdf5d401bca9c16.png)

<br>

### Section 1

In the first section, we have three different articles. Each has an `<h3>` and a `<p>` tag inside. Let's add a link under each paragraph. This link doesn't need to point anywhere.

<br>

:::info
We can create a link without any specific URL by providing a hash in the `href` attribute:
<br>

```html
<a href="#">Link text</a>
```
:::

<br>

Add three links, one in each section, in this order:

- Learn More
- Watch Video
- Register

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_016b92205b14c5a93d86d324547cf86e.png)

<br>

### Section 2

In this section, we have four different articles that contain information about how a typical day at IronSkydive is structured. Let's add some descriptive icons to each section.

The different icons, in the correct order, are:

- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-training.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-get-ready.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-fly.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-jump.png`

Remember to add an alternative descriptive text in the `alt` attribute. Each of the sections will have this format with different images:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3aa54eab8bec42f35381b704d5c7b06e.png)

<br>

### Section 3

Let's add the team information in the section. You should have three different articles without any information. Inside each article, you will add the team member name in the **bold** text (but this is something you will worry about when we come to the styling). You can use _block_ level tag, `<h4>` to wrap each name. Under the name, you will have to add the team member's photo. You can find the images here:

- **Harold Rothstein**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c18b1c463b80090894237a262dfdfbad.jpg`
- **Susan Phillips**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a18d6123a7c8e75f7e70a4e59b941093.jpg`
- **Taylor Roberts**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7104a331530d1b0611da55093b7dc421.jpg`

Don't forget to add alternative text in case the image doesn't load. These images are quite big, but we will handle this later on through CSS.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_845dbf46e21d7bb275bdb5b23ff17aa6.gif)

<br>

To finish this section, let's add a `<hr>` between the paragraph and the team members' information.

### Section 4

_Nothing to add_!

### Footer

First, let's format the address. Right now, all the information is in one line. Let's use `<br>` tags to separate the different sections of the address.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_cf1a7806a1a921e018aa46c428d67a17.png)

<br>

Finally, add links to all the social networks where the users can follow IronSkydive. You can create empty links (with the hash in the `href` attribute), or add links to the social networks. In both cases, a new tab has to be opened when the users click on the links.

<br>

:::info
:bulb: Use the anchor's [`target`](https://html.com/attributes/a-target/) attribute to open a link in a new tab. (the word _target_ is clickable, so feel free to explore a bit - remember, you don't have to memorize anything, know where to find the answers you need.)
:::

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_27057afe7732d2b6f26ce69eb00a63ec.png)

<br><br>

:heart: **Happy coding!**