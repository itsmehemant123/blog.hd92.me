---
title: "Contact me"
layout: page
path: "/contact"
---

I'm available via mail at *hemanth (dot) devarapalli (at) outlook*, or feel free to ping me on twitter <a href="https://twitter.com/daemon92" target="_blank">@daemon92</a>. 

Or, use the form below.

<style>
    .feedback-input {
        color:white;
        font-weight:500;
        font-size: 18px;
        border-radius: 5px;
        line-height: 22px;
        background-color: transparent;
        border:1px solid #00a8ff;
        transition: all 0.3s;
        padding: 13px;
        margin-bottom: 15px;
        width:100%;
        box-sizing: border-box;
        outline:0;
    }

    .feedback-input:focus { border:2px solid #0073af; }

    textarea {
        height: 150px;
        line-height: 150%;
        resize:vertical;
    }

    [type="submit"] {
        width: 100%;
        background:none;
        border-radius:5px;
        border:0;
        cursor:pointer;
        color:white;
        font-size:18px;
        padding-top:10px;
        padding-bottom:10px;
        transition: all 0.3s;
        margin-top:-4px;
    }

    [type="submit"]:hover { color: #00a8ff; }
</style>

<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="Send"/>
</form>