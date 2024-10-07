// Options the user could type in
const prompts = [
  ["hello what is your name"],
  ["hi", "hey", "hello", "good morning", "good afternoon",],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [ 
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["what is the weather today","how is the weather today","how is the weather"], // New prompt
  ["what time is it"],             // New prompt
  ["tell me a fact"],              // New prompt
  ["what's your favorite color"],  // New prompt
  ["do you have any hobbies"],      // New prompt
  ["what is water","talk about water"],
  ["what is english","talk about english"],
  ["what is book","talk about book"],
  ["what is tv","talk about tv"],
  ["what is phone","talk about phone"],
  ["what is laptop","talk about laptop","what is computer"],
  ["who is baheer"],
  ["what is school","talk about school"],
  ["who is student","talk about student"],
  ["who is teacher","talk about teacher"],
  ["where is afghanistan","give me information about afghanistan"," can you give me information about afghanistan","taik about afghanistan"],
  ["fuck you","stupid","motherfucker","suck my dick","nigga","gay","you are stupid","you are nigga","you are gay"],
  ["me too","iam fine","good","great"],
  ["it is none of your bussines"],
  ["goodnight"],
]

// Possible responses, in corresponding order

const replies = [
  ["hi, iam a bot. "],
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine what about you",
    "Pretty well what about you?",
    "Fantastic what about you?"
  ],
 
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot created by baheer safi", "I am a bot created by baheer safi."],
  ["by baheer safi"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  [ "yeah"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["dont ask"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["I'm not sure, you'll have to check the weather yourself.", "I don't have access to real-time information."], // New reply
  ["I do not have access to a clock.", "I cannot tell you the time."], // New reply
  ["Did you know that the population of the earth is over 8 billion people?", "A fact: The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex."], // New reply
  ["I don't have preferences, as I am a machine.", "I do not have a favorite color."], // New reply
  ["I don't have hobbies, but I am always learning new things!"], // New reply
  ["Water is an inorganic compound with the chemical formula H2O. "],
  ["English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England on the island of Great Britain."],
  ["A book is a medium for recording information in the form of writing or images. "],
  ["Television (TV) is a telecommunication medium for transmitting moving images and sound. Additionally, the term can refer to a physical television set rather than the medium of transmission. "],
  ["A telephone, colloquially referred to as a phone, is a telecommunications device that permits two or more users to conduct a conversation when they are too far apart to be easily heard directly. "],
  ["A laptop computer or notebook computer, also known as a laptop or notebook, is a small, portable personal computer (PC). "],
  ["baheer is web,AI,antivirus developer and i created by him.he is highly intelligent and smart. "],
  ["A school is both the educational institution and building designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. "],
  ["A student is a person enrolled in a school or other educational institution."],
  ["A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue, via the practice of teaching. "],
  ["Afghanistan, officially the Islamic Emirate of Afghanistan, is a landlocked country located at the crossroads of Central Asia and South Asia."],
  ["please be polite!","be careful! about what you say"],
  ["glad to hear that."],
  ["so dont talk with me"],
  ["thanks,to you too, see you later"], 
  
]

  
  // Random for any other user input
  
  const alternative = [
    "I don't understand!"
  ]
  
  // Whatever else you want :)

  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
  