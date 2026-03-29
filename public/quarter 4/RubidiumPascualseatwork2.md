# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

  The sidebar moved 20px to the right and 20px down relative to the static position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

  When you scroll the page, the footer stays at the bottom of the page and does not move with the other content. The footer behaves differently because it is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

  Position: absolute is positioned relative to the nearest positioned ancestor, while position: fixed is positioned relative to the viewport.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

  The notice appears on top of the content because the z-index of the notice is greater than the z-index of the content. If we swap the z-index values, the content would appear on top of the notice. 

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

      To position the .notice box on the top right corner of the .content box, we need to set the position top and position left values of .notice to higher values so that the box moves further down and to the right. I set mine to 66px and 430px, respectively.

      ```css
      .content {
        background: lightyellow;
        width: 300px;
        height: 200px;
        position: absolute; top: 66px; left: 200px;
        z-index: 1;
      }  
      .notice {
      position: absolute;
      top: 66px;
      left: 430px;
      background: orange;
      padding: 10px;
      z-index: 2;
      }  
      ```

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

      Relative positions the content relative to its static position, while fixed positions it relative to the viewport.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

      The z-index controls the stack order of elements. The greater z-index value of .notice is the reason why it appears on top of .content.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static is the default positioning of an element, positioned relative to the normal standard flow of a page. Relative positions an element relative to its normal position. Absolute positions an element relative to the nearest positioned ancestor. Fixed positions an element relative to the viewport.

    b. How does absolute positioning depend on its parent element?

    Absolute positioning depends on its parent element to define its position, as it is positioned relative to the nearest positioned ancestor.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Fixed elements always stay in the same place in the viewport, while sticky elements function like a normal element until the user scrolls to the scrolling threshold, where they become fixed.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    I would use the z-index to make sure important information appears on top of other elements. I would also use fixed positioning to keep the navigation bar fixed on the webpage, so that the users have access to it even after scrolling far down. Lastly, I would use the sticky positioning to keep important headings visible until a user scrolls down to its section, where they can read more about it.