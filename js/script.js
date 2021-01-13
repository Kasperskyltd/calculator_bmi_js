function bmi(){
    let wzrost = document.querySelector(".metry").value;
    let waga = document.querySelector(".waga").value;
    let bmi = waga / Math.pow(wzrost, 2);
    if(bmi < 18.5){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Masz niedowage"
    }
   else if (bmi >= 18.5 && bmi <= 24.99){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Twoja waga jest prawidłowa"
    } else if (bmi >= 25.0 && bmi <=29.99){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Masz nadwage"
    } else if (bmi >= 30.0 && bmi <=34.99){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Masz otyłość 1 stopnia"
    } else if (bmi >= 35.0 && bmi <=39.99){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Masz otyłość 2 stopnia"
    } else if (bmi >= 40){
        document.querySelector("p").innerHTML = "Twój wskaźnik BMI wynosi: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+ "Masz otyłość 3 stopnia"
    }
}

document.querySelector(".btn").addEventListener("click", bmi)