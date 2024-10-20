const translations = {
    en:{
        select: "Select a Language",
        title: "Welcome to Agri Supply",
        pargr:"Sujal Diya Kirtan Rajat"
    },
    gu:
    {
        select: "એક ભાષા પસંદ કરો",
        title: "એગ્રી સપ્લાયમાં આપનું સ્વાગત છે",
        pargr:"સુજલ દિયા કીર્તન રજત"
    }
}



const LanguageSelectop = document.querySelector('select');
let h1=document.getElementById("h1");
let titile=document.getElementById("titile");
let par=document.getElementById("par");

LanguageSelectop.addEventListener("change", (event) => {
    setlanguage(event.target.value)
})

const setlanguage = (language) =>{
    if (language == "gu") {
     h1.innerText = translations.gu.select;
     titile.innerText = translations.gu.title;
     par.innerText = translations.gu.par
        
    }
    else if(language == "en")
    {
        h1.innerText = translations.en.select;
        titile.innerText = translations.en.title;
        par.innerText = translations.en.par
    }
}
