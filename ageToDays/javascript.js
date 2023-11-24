function convertToDays(){
    const ageInY = parseFloat(document.getElementById('age').value);

    if(isNaN(ageInY)){
        document.getElementById('results').textContent = "Enter a valid number for your age.";
    }else{
        const ageInD = ageInY * 365;
        document.getElementById('results').textContent = `Age in days: ${ageInD} days`;
    }
}