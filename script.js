
function calculation() {
    var A = parseFloat(document.getElementById("height").value);
    var B = parseFloat(document.getElementById("weight").value);
    if (A <= 0 || B <= 0)
        document.getElementById("output").value = "INVALID INPUT";
    else
    {
      var bmi=B/(A*A);
      var num=bmi.toFixed(1);
        document.getElementById("output").value = "BMI: " +num;
        if(num<18.5)
        document.getElementById("table").value="Weight status: Underweight";
      else if(num>=18.5&&num<=24.9)
      document.getElementById("table").value="Weight status: Normal";
    else if(num>=25.0&&num<=29.9)
    document.getElementById("table").value="Weight status: Overweight";
  else if(num>=30.0)
  document.getElementById("table").value="Weight status: Obese";
    }
}
function condition()
{
    document.getElementById("message").innerHTML="";
}
function con()
{
    document.getElementById("message").innerHTML="NOTE :Height in m,Weight in kg";
}


