# Jacket
A jQuery Javascript extension for PasteJacking

##What is 'PasteJacking'?
PasteJacking is modifying the Clipboard by changing it to something else.
This could be potentially be used for malicious use.
Just imagine: You read a web tutorial and just want to copy paste. 
```
echo Hello this is totally safe to use! :)
```

And you straight up copy it in the CMD / Terminal and suddenly..
```
echo "I am dr evil! >:D" & rm -rf *
(\n) <-- Newline so the CLI gets executed
```

Obviously thats not good but thats not in my hands.
**If you copy paste terminal stuff directly from a website please make sure you are pasting the right thing**

##Requirement
[jQuery](http://jquery.com) is required in order to use Jacket.
Jacket has to be loaded AFTER jQuery.
```html
<script src="/js/jquery.js"></script>
<script src="/js/jacket.js"></script>
```

##Example of use
Refer to **/examples** or read below:

###Binding copy

We have this textbox:
```html
<input type='input' id='jackthis' value='Some stuff'>
```

And we want that the user copies **'Some stuff - Read more at x'**.
This is possible by the following JavaScript:
```javascript
$("#jackthis").jacket($(this).val() + " - Read more at x");
```

Now when the users copies text from the texbox, he will copy it including the " - Read more at x"

##Unbinding copy
Simply use
```javascript
$("#jackthis").jacket()
```

##Documentation
[Please refer to the Wiki](https://github.com/XaoticLabs/Jacket/wiki)

##License
[MIT License](http://choosealicense.com/licenses/mit/)
