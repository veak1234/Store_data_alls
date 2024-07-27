<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mixing languages</title>

    <!-- Lets mix HTML, CSS, Javascript and PHP in the same file ! -->
    <style>
      .right {
        color: green;
      }
      .wrong {
        color: red;
      }
      label {
        display: inline-block;
      }
      label:before {
        content: "";
        background: url("http://placehold.it/350x150") no-repeat;
        width: 30px;
        height: 30px;
        display: inline-block;
      }
      input {
        display: none;
      }
    </style>
</head>

<body>

    <?php
    // An array of fruits
    $array = ['mango', 'apple', 'banana'];
    ?>

    <form>

        <?php
        for ($i = 0; $i < count($array); $i++) :
        ?>
         <!-- Display each fruits in the array as a radio button with class='choice' -->
        <input type="radio" name="radio" />
        <label>
          <span><?php echo $array[$i] ?></span>
        </label>
        <?php
        endfor
        ?>

        <button type="submit" id="submit_btn">Submit</button>
    </form>

    <div>
        <p id='result'></p>
    </div>

    <script>
        function showFruits(event) {
            event.preventDefault();
            $radio = document.getElementsByClassName('choice');
            for ($index = 0; $index < count($radio); $index++) {
                if (radio[index].checked) {
                    // In javascript, Display the name of the checked fruit in p#result element
                    document.getElementById(<?php echo $index; ?>).textContent =
                    radio[index].nextElementSibling.textContent;
                
                }
            }
        }

        let submitBtn = document.getElementById("submit_btn");
        submitBtn.addEventListener("click", showFruits);
    </script>

</body>

</html>