
<!-- HEADER -----------------------------------------  -->
 <?php
   require_once('templates/header.php');
?>
<!-- MAIN -----------------------------------------  -->
<div class="home-page">
   <div class="body">
      <main>
         <h2>PNC</h2> 
         <a href="resuld.php"><h2>RESULD</h2></a> 
      </main>
      <form action="resuld.php" method="post">
         <h1>Welcom to you </h1>
         <label>Your name: </label>
         <input type="text" name="name"></input>
         
         <label>Club you want to apply: </label>
         <select name="text" id="select">
            <option value="Musice">Musice</option>
            <option value="Sport">Sport</option>
            <option value="Cycling">Cycling</option>
         </select>
         
         <label>Be time for you : </label>
         <div class="radio">
            <label>
               <input type="radio" name="gender" value="Satuday mornings" checked /> Satuday mornings
            </label>
            
            <label>
               <input type="radio" name="gender" value="Saturtay aftemoons" /> Saturtay aftemoons
            </label>
            
            <label>
               <input type="radio" name="gender" value="Sunday afternoons" /> Sunday afternoons
            </label>
         </div>
         <label>Yours skills</label>
         <div class="checkbox">
            <div class="heatder-checkbox">
               <input type="checkbox" id="test-code" name="answerbox[]" value="the test code" >
               <label for="the-test-code"> the test code </label><br>
   
               <input type="checkbox" id="good-arts" name="answerbox[]" value="good in arts">
               <label for="good-in-arts"> good in arts </label><br>
   
               <input type="checkbox" id="suoer_star" name="answerbox[]" value="a suoer star">
               <label for="a-suoer-star"> a suoer star </label><br>
   
               <input type="checkbox" id="crazy-dancer" name="answerbox[]" value="a crazy dancer">
               <label for="a-crazy-dancer"> a crazy dancer </label>
            </div>

            <div class="footer-checkbox">
               <input type="checkbox" id="simger" name="answerboxs[]" value="singer">
               <label for="singer"> singer </label><br>
   
               <input type="checkbox" id="good-design" name="answerboxs[]" value="good in design">
               <label for="good-in-desin"> good in design </label><br>
   
               <input type="checkbox" id="best-sater" name="answerboxs[]" value="the best sater">
               <label for="the-best-sater"> the best sater </label><br>
   
               <input type="checkbox" id="in-speeches" name="answerboxs[]" value="good in speeches">
               <label for="good-in-speeches"> good in speeches </label>
            </div>
         </div>
         <button type="submit" name="submit" value="Submit"><h2>SUBMIT</h2></button>
      </form>
   </div>
</div>

<!-- FOOTER -----------------------------------------  -->
<?php
   require_once('templates/footer.php');
?>

