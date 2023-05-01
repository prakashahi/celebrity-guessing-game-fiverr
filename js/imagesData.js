const imagesData = []; // Storing all Images data
const fatFolderPath = "images/Fat"; // Fat images folder path
const normalFolderPath = "images/Normal"; // Normal images folder path

// The allImages array holds the file names of all the celebrity images
const allImages = ['Affleck_Ben.jpg', 'Allen_Tim.jpg', 'Anniston_Jennifer.jpg', 'Baldwin_Alec.jpg', 
                    'Berry_Halle.jpg', 'Bezos_Jeff.jpg', 'Biden_Joe.jpg', 'Bieber_Justin.jpg', 
                    'Bullock_Sandra.jpg', 'Cage_Nicolas.jpg', 'Carrey_Jim.jpg', 'Clinton_Bill.jpg', 
                    'Clinton_Hilary.jpg', 'Cruise_Tom.jpg', 'Cyrus_Miley.jpg', 'Degeneres_Ellen.jpg', 
                    'Deniro_Robert.jpg', 'Depp_Johnny.jpg', 'Dicaprio_Leonardo.jpg', 'Eastwood_Clint.jpg', 
                    'Ferrell_Will.jpg', 'Freeman_Morgan.jpg', 'Gates_Bill.jpg', 'Hanks_Tom.jpg', 
                    'Hilton_Paris.jpg', 'Jolie_Angelina.jpg', 'Kanye_West.jpg', 'Lawrence_Jennifer.jpg', 
                    'Lohan_Lindsey.jpg', 'Lopez_Jennifer.jpg', 'Minaj_Nicki.jpg', 'Musk_Elon.jpg', 
                    'Obama_Michelle.jpg', 'Pacino_Al.jpg', 'Pitt_Brad.jpg', 'Rock_Chris.jpg', 
                    'Rudd_Paul.jpg', 'Sandler_Adam.jpg', 'Schwarzenegger_Arnold.jpg', 'Schwimmer_David.jpg', 
                    'Seinfeld_Jerry.jpg', 'Smith_Will.jpg', 'Spacey_Kevin.jpg', 'Spears_Britney.jpg', 
                    'Tarantino_Quentin.jpg', 'Travolta_John.jpg', 'Washington_Denzel.jpg', 'Winfrey_Oprah.jpg', 
                    'Wonder_Stevie.jpg', 'Zuckerberg_Mark.jpg'];

// The forEach loop iterates over each file name in allImages array and extracts the first and last 
// name of the celebrity from the file name and make them array of object
allImages.forEach(imgName => {
    let [lastName, firstName] = imgName.split("_");
    firstName = firstName.split(".")[0];
    let celebName = `${firstName} ${lastName}`;
    let normalImgPath = `${normalFolderPath}/${imgName}`;
    let fatImgPath = `${fatFolderPath}/${imgName}`;
    
    imagesData.push({ lastName, celebName, normalImgPath, fatImgPath });
});