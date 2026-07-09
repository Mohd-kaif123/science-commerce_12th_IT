/* ==============================================================
   BRIGHT EDUCATION — TOPPERS DATA
   ==============================================================
   This is the ONLY file you need to edit to add, remove, or update
   a student. Every page (Home carousel + Toppers page grid) reads
   from this single array, so one edit updates the whole website.

   HOW TO ADD A NEW STUDENT
   -------------------------------------------------------------
   1. Add the student's photo to:  images/students/your-id.jpeg
      (square photo works best, e.g. 400x400px)
   2. Copy one object below and paste it into the TOPPERS array.
   3. Fill in the fields (see the guide under each field name).
   4. Save the file — that's it. No other file needs to change.

   FIELD GUIDE
   -------------------------------------------------------------
   id         : unique lowercase id, no spaces (e.g. "priya-sharma")
   name       : full display name (e.g. "Priya Sharma")
   photo      : path to photo, or null to show initials instead
   category   : one of "school" | "jrcollege" | "hsc" | "success"
                  school    -> Std VII-X toppers (Bright Education)
                  jrcollege -> Std XI-XII toppers (Bright Jr. College)
                  hsc       -> Featured HSC board result achievers
                  success   -> Success stories (direct-entry passes)
   percent    : number like 96, or null if not applicable
   marksLabel : short text used instead of / alongside percent,
                  e.g. "75 Marks in Maths", "98 in Maths & IT"
   rank       : e.g. "1st", "12th", "Topper" — shown as a badge
   scope      : where that rank applies, e.g. "in Bright Education",
                  "in S.V.E. School", "in N.J.B. College"
   detail     : one short line shown on the Toppers page card
                  (stream/college/story — optional)
   featured   : true to include this student in the homepage
                  auto-sliding carousel (keep this list short,
                  ideally 6-10 total across categories)
   ============================================================== */

const TOPPERS = [

  // ---------------- SCHOOL SECTION (Std VII-X) — Bright Education ----------------
  { id:"khushi",       name:"Khushi",       photo:"images/students/khushi.jpeg",       category:"school", percent:83, marksLabel:null, rank:"1st",  scope:"in J.J.G.H. School", detail:"Std X · SSC", featured:true },
  { id:"preeti-jjgh",  name:"Preeti",       photo:"images/students/preeti-jjgh.jpeg",  category:"school", percent:81, marksLabel:null, rank:"2nd",  scope:"in J.J.G.H. School", detail:"Std X · SSC", featured:false },
  { id:"saroj",        name:"Saroj",        photo:"images/students/saroj.jpeg",        category:"school", percent:81, marksLabel:null, rank:"2nd",  scope:"in S.V.H. School",   detail:"Std X · SSC", featured:false },
  { id:"masoom",       name:"Masoom",       photo:"images/students/masoom.jpeg",       category:"school", percent:null, marksLabel:null, rank:"4th", scope:"in J.J.G.H. School", detail:"Std X · SSC", featured:false },
  { id:"ananya",       name:"Ananya",       photo:"images/students/ananya.jpeg",       category:"school", percent:null, marksLabel:null, rank:"5th", scope:"in J.J.G.H. School", detail:"Std X · SSC", featured:false },
  { id:"ayesha",       name:"Ayesha",       photo:"images/students/ayesha.jpeg",       category:"school", percent:null, marksLabel:null, rank:"6th", scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"nikhil",       name:"Nikhil",       photo:"images/students/nikhil.jpeg",       category:"school", percent:null, marksLabel:null, rank:"7th", scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"shivani",      name:"Shivani",      photo:"images/students/shivani.jpeg",      category:"school", percent:null, marksLabel:null, rank:"8th", scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"preeti-bright",name:"Preeti S.",    photo:"images/students/preeti-bright.jpeg",category:"school", percent:null, marksLabel:null, rank:"9th", scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"fatima",       name:"Fatima",       photo:"images/students/fatima.jpeg",       category:"school", percent:null, marksLabel:null, rank:"10th",scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"muskan",       name:"Muskan",       photo:"images/students/muskan.jpeg",       category:"school", percent:null, marksLabel:null, rank:"11th",scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"shoeb",        name:"Shoeb",        photo:"images/students/shoeb.jpeg",        category:"school", percent:null, marksLabel:null, rank:"12th",scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"fahmeed",      name:"Fahmeed",      photo:"images/students/fahmeed.jpeg",      category:"school", percent:null, marksLabel:null, rank:"13th",scope:"in Bright Education", detail:"Std X", featured:false },
  { id:"jabir",        name:"Jabir",        photo:"images/students/jabir.jpeg",        category:"school", percent:null, marksLabel:null, rank:"14th",scope:"in Bright Education", detail:"Std X", featured:false },

  // ---------------- JR. COLLEGE SECTION (Std XI-XII) — Bright Jr. College ----------------
  { id:"zinat",        name:"Zinat",        photo:"images/students/zinat.jpeg",        category:"jrcollege", percent:96, marksLabel:null, rank:"1st",  scope:"in S.V.E. School",     detail:"Std X", featured:true },
  { id:"zoya",         name:"Zoya",         photo:"images/students/zoya.jpeg",         category:"jrcollege", percent:95, marksLabel:null, rank:"2nd",  scope:"in S.V.E. School",     detail:"Std X", featured:true },
  { id:"rehan",        name:"Rehan",        photo:"images/students/rehan.jpeg",        category:"jrcollege", percent:93, marksLabel:null, rank:"3rd",  scope:"in S.V.E. School",     detail:"Std X", featured:false },
  { id:"dhannyashri",  name:"Dhannyashri",  photo:"images/students/dhannyashri.jpeg",  category:"jrcollege", percent:92, marksLabel:null, rank:"4th",  scope:"in S.V.E. School",     detail:"Std X", featured:false },
  { id:"aafiya",       name:"Aafiya",       photo:"images/students/aafiya.jpeg",       category:"jrcollege", percent:89, marksLabel:null, rank:"5th",  scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"zeenat",       name:"Zeenat",       photo:"images/students/zeenat.jpeg",       category:"jrcollege", percent:87, marksLabel:null, rank:"6th",  scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"sarfaraz",     name:"Sarfaraz",     photo:"images/students/sarfaraz.jpeg",     category:"jrcollege", percent:84, marksLabel:null, rank:"7th",  scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"pranjal",      name:"Pranjal",      photo:"images/students/pranjal.jpeg",      category:"jrcollege", percent:84, marksLabel:null, rank:"8th",  scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"rajbahadur",   name:"Raj Bahadur",  photo:"images/students/rajbahadur.jpeg",   category:"jrcollege", percent:84, marksLabel:null, rank:"9th",  scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"suraj",        name:"Suraj",        photo:"images/students/suraj.jpeg",        category:"jrcollege", percent:80, marksLabel:null, rank:"10th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"laxmi",        name:"Laxmi",        photo:"images/students/laxmi.jpeg",        category:"jrcollege", percent:80, marksLabel:null, rank:"11th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"humaira",      name:"Humaira",      photo:"images/students/humaira.jpeg",      category:"jrcollege", percent:77, marksLabel:null, rank:"12th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"usman",        name:"Usman",        photo:"images/students/usman.jpeg",        category:"jrcollege", percent:77, marksLabel:null, rank:"13th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"okais",        name:"Okais",        photo:"images/students/okais.jpeg",        category:"jrcollege", percent:76, marksLabel:null, rank:"2nd",  scope:"in Q.B.E. School",     detail:"Std X", featured:false },
  { id:"adeena",       name:"Adeena",       photo:"images/students/adeena.jpeg",       category:"jrcollege", percent:72, marksLabel:null, rank:"15th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"sohail",       name:"Sohail",       photo:"images/students/sohail.jpeg",       category:"jrcollege", percent:70, marksLabel:null, rank:"16th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"pransu",       name:"Pransu",       photo:"images/students/pransu.jpeg",       category:"jrcollege", percent:67, marksLabel:null, rank:"17th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"abubakar",     name:"Abubakar",     photo:"images/students/abubakar.jpeg",     category:"jrcollege", percent:63, marksLabel:null, rank:"18th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"alina",        name:"Alina",        photo:"images/students/alina.jpeg",        category:"jrcollege", percent:63, marksLabel:null, rank:"19th", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"sara",         name:"Sara",         photo:"images/students/sara.jpeg",         category:"jrcollege", percent:null, marksLabel:"75 Marks in Maths", rank:"Special Mention", scope:"in Bright Jr. College", detail:"Std X", featured:false },
  { id:"sarim",        name:"Sarim",        photo:"images/students/sarim.jpeg",        category:"jrcollege", percent:54, marksLabel:null, rank:"21st", scope:"in Bright Jr. College", detail:"Std X", featured:false },

  // ---------------- HSC BOARD ACHIEVERS 2026 (Std XII) — Bright Jr. College ----------------
  { id:"faizan",  name:"Khan Faizan",      photo:"images/students/faizan.jpeg",  category:"hsc", percent:88.83, marksLabel:"98 in Maths & IT", rank:"1st", scope:"in Bright Jr. College & N.J.B. College", detail:"XII Science · 533/600", featured:true },
  { id:"zikra",   name:"Khan Zikra Hiroz", photo:"images/students/zikra.jpeg",   category:"hsc", percent:84,    marksLabel:null,               rank:"1st", scope:"in Bright Jr. College & N.J.B. College", detail:"XII Commerce · 502/600", featured:true },
  { id:"mantasha",name:"Khan Mantasha",    photo:"images/students/mantasha.jpeg",category:"hsc", percent:null,  marksLabel:"95% in Mathematics",rank:"1st", scope:"in N.J.B. College — XII Science", detail:"XII Science", featured:false },
  { id:"tahreen", name:"Khan Tahreen",     photo:null,                            category:"hsc", percent:87.5,  marksLabel:null,               rank:"1st", scope:"in Bright Jr. College, 4th in Swayam Siddhi College", detail:"XII Science", featured:false },
  { id:"sufiyan", name:"Sufiyan Hasim Khan",photo:"images/students/sufiyan.jpeg",category:"hsc", percent:null,  marksLabel:"82 in Biology",    rank:"Topper 2026", scope:"in Bright Jr. College", detail:"XII Science", featured:false },

  // ---------------- SUCCESS STORIES (Direct-entry board passes) ----------------
  { id:"abhijeet", name:"Abhijeet", photo:"images/students/abhijeet.jpeg", category:"success", percent:null, marksLabel:null, rank:"PASSED", scope:"7th to Direct SSC", detail:"Std X Result", featured:false },
  { id:"misbah",   name:"Misbah",   photo:"images/students/misbah.jpeg",   category:"success", percent:null, marksLabel:null, rank:"PASSED", scope:"10th to Direct 12th Science", detail:"Std XII Result", featured:false },

];
