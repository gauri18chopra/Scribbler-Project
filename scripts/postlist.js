
var blogHeading=document.getElementById('blogHeading');
var blogContent=document.getElementById("blogContent");

/**FUNCTION FOR EDITING CONTENT */
function editContent()
{   /*BLOG HEADING AND CONTENT BECOMES EDITABLE*/
    if(document.getElementById('edit').innerHTML=='Edit <i class="fa fa-edit"></i>')
   {
       
    blogHeading.setAttribute("contenteditable",true);
    blogContent.setAttribute("contenteditable",true);
    document.getElementById('edit').innerHTML='Save <i class="fa fa-save"></i>';

    blogHeading.style.border="1px solid lavender";
    blogContent.style.border="1px solid lavender";
    blogContent.focus();
}
else{

    document.getElementById('edit').innerHTML='Edit <i class="fa fa-edit"></i>';
    blogHeading.setAttribute("contenteditable",false);
    blogContent.setAttribute("contenteditable",false);

    blogHeading.style.border="none";
    blogContent.style.border="none";
}

    
   
}



var count=0; /**VARIABLE FOR LIKE */

document.getElementById("likeCount").innerHTML="Be the first one to like this!"

var elem=document.getElementById("like");


/**FUNCTION FOR ADDING LIKE TO POST */
function addLike()
{
   /**INCREASE LIKE++ */ 
   count=count+1;
   if(count==1)
   {
       document.getElementById("likeCount").innerHTML=count +" person likes this!";
       elem.innerHTML='<i class="fa fa-thumbs-up"></i> Liked!';
   }
   else
   {
   document.getElementById("likeCount").innerHTML=count+ " people have liked this!";
   elem.innerHTML='<i class="fa fa-thumbs-up"></i> Liked!';
   } 
    
}
 
/**FUNCTION FOR POSTING COMMENT */
function postComment()
{
    
    var commentDiv=document.getElementById('commentBox');
    var comment=document.getElementById('commentArea').value;
    document.getElementById('commentArea').placeholder="Leave a comment...";

    /**IF THERE'S NO COMMENT AND USER TRIES TO CLICK THE BUTTON POP UP ALERT */
    if(comment=="")
    {
        alert('Please write comment in comment box first');
    }
    else
    {
        var comntSection=document.createElement('div');
        comntSection.append(comment);
        commentDiv.prepend(comntSection);
       
    }
}