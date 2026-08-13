
import Header from "./assets/components/Header"
import HomeCarousel from "./assets/components/HomeCarousel"
import Cards1 from "./assets/components/Cards1"
import Cards2 from "./assets/components/Cards2"
import Footer from "./assets/components/Footer"
import {BrowserRouter,Routers,Route} from "react-router-dom"
//
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const Products=[
    {
      id:1,
      productName:"Rabbit",
      productPrice:1200,
      productDiscripption:"A cute and soft musical rabbit toy designed for children. Its adorable appearance and playful design make it a perfect companion for kids. Great for playtime, gifting, and developing a child’s imagination.",
      productImage:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/musical-toy/c/e/r/cute-white-musical-rabbit-toy-plush-bunny-with-music-for-kids-original-imahnpssxbrbxpfy.jpeg?q=90"
    },
    {
      id:2,
      productName:"pool",
      productPrice:1300,
      productDiscripption:"A spacious inflatable swimming pool perfect for family fun and outdoor activities. It is suitable for children and adults, making it a great choice for summer days, backyard play, and relaxing with family.",
      productImage:"https://rukminim1.flixcart.com/image/1536/1536/ktd9mkw0/bath-tub/e/z/v/best-kids-children-swimming-pool-inflatable-bath-tubs-for-adults-original-imag6q4nfaag3qdp.jpeg?q=90"
    },
    {
      id:3,
      productName:"slide",
      productPrice:1500,
      productDiscripption:"A fun and safe indoor/outdoor slide and swing set designed for young children. It helps encourage active play, balance, coordination, and physical development while providing hours of entertainment. Suitable for ages 2–4 years.",
      productImage:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/outdoor-toy/v/h/d/3-slide-for-kids-2-4-years-old-indoor-outdoor-weight-capacity-of-original-imahpfzbfjcgxnxp.jpeg?q=90"
    }

  ]
  const books=[
    {
      id:1,
      bookName:"It End With Us",
      bookPrice:550,
      bookDiscription:"It Ends with Us by Colleen Hoover is a romantic drama about Lily Bloom, who falls in love with Ryle Kincaid but faces difficult truths about their relationship. When her first love, Atlas, returns, Lily must make a painful choice about love, abuse, and her future.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/f/y/0/it-ends-with-us-enriched-transparent-original-imahjug7mbjatafn.png?q=90"
    },
    {
      id:2,
      bookName:" Can We be Strangers Again? ",
      bookPrice:180,
      bookDiscription:"Can We Be Strangers Again? by Shubham Shukla is an emotional story about love, heartbreak, and the pain of letting someone go. It explores whether two people who once shared a deep connection can truly become strangers again after everything they’ve been through.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/6/l/v/can-we-be-strangers-again-original-imahz7hrraxdfz2y.jpeg?q=90"
    },
    {
      id:3,
      bookName:"It Starts With Us",
      bookPrice:200,
      bookDiscription:"It Starts with Us by Colleen Hoover continues Lily Bloom’s story after It Ends with Us. As Lily reconnects with her first love, Atlas Corrigan, they get a chance to build the loving relationship they always wanted while facing challenges from the past.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/f/b/q/it-starts-with-us-original-imah9b6mttw4zyar.jpeg?q=90"
    },
    {
      id:4,
      bookName:" You Were Never Meant To Read This",
      bookPrice:250,
      bookDiscription:"You Were Never Meant to Read This is a collection of raw, emotional thoughts about love, heartbreak, loneliness, and healing. It feels like reading someone’s private feelings—words never meant to be shared, but deeply relatable.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/z/8/p/you-were-never-meant-to-read-this-original-imahpbx8ypwmhf3s.jpeg?q=90"
    },
    {
      id:5,
      bookName:"Ikigai",
      bookPrice:350,
      bookDiscription:"**Ikigai** by Héctor García and Francesc Miralles explores the Japanese concept of finding purpose and meaning in life. It shares ideas about happiness, healthy habits, relationships, and living a long, fulfilling life.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/v/5/h/kigai-the-japanese-secret-to-a-long-and-happy-life-original-imah96zqxf5ggeg3.jpeg?q=90"
    },
    {
      id:6,
      bookName:"Dracula",
      bookPrice:450,
      bookDiscription:"**Dracula** by Bram Stoker is a classic Gothic horror novel about Count Dracula, a mysterious vampire who travels from Transylvania to England. A group of people must come together to stop him and protect themselves from his terrifying power.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/regionalbooks/c/s/c/dracula-original-imahntcbzh8hmbrj.jpeg?q=90"
    },
    {
      id:7,
      bookName:"Heidi",
      bookPrice:550,
      bookDiscription:"**Heidi** by Johanna Spyri is a heartwarming story about a cheerful orphan girl who goes to live with her grandfather in the Swiss Alps. Through her kindness, innocence, and love for nature, Heidi brings happiness to everyone around her",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/regionalbooks/q/o/a/heidi-original-imahns46tfhjz2k6.jpeg?q=90"
    },
    {
      id:8,
      bookName:"How to Win Friends & Influence People",
      bookPrice:500,
      bookDiscription:"**How to Win Friends & Influence People** by Dale Carnegie is a practical self-help book about building strong relationships, communicating effectively, and positively influencing others. It teaches the importance of kindness, listening, appreciation, and understanding people.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/k/j/p/how-to-win-friends-influence-people-original-imah3cztabqcwzzq.jpeg?q=90"
    },
    {
      id:9,
      bookName:"Better Than the Movies",
      bookPrice:150,
      bookDiscription:"**Better Than the Movies** by Lynn Painter is a fun young-adult romantic comedy about Liz Buxbaum, a girl who dreams of a perfect love story. When her childhood friend Wes helps her pursue her crush, things take an unexpected turn, proving that real love can be even better than the movies.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/w/t/v/better-than-the-movies-original-imahd3weauqyea9p.jpeg?q=90"
    },
    {
      id:10,
      bookName:"The Wicked King",
      bookPrice:170,
      bookDiscription:"**The Wicked King** by Holly Black is the second book in *The Folk of the Air* series. Jude has gained power in the dangerous world of Faerie, but controlling the wicked King Cardan is harder than she expected. Filled with romance, betrayal, secrets, and political intrigue, the story explores power and trust.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/regionalbooks/g/v/v/the-wicked-king-holly-black-original-imagsqh7qxjczgc3.jpeg?q=90"
    },
    {
      id:11,
      bookName:"Sherlock Holmes",
      bookPrice:170,
      bookDiscription:"Sherlock Holmes by Sir Arthur Conan Doyle is a collection of thrilling detective stories featuring the brilliant Sherlock Holmes and his loyal friend Dr. Watson. Using sharp observation and clever reasoning, Holmes solves mysterious and challenging crimes.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/x/p/f/the-complete-novel-of-sherlock-holmes-original-imahkz567jcvsgjh.jpeg?q=90"
    },
    {
      id:12,
      bookName:"The Little Prince",
      bookPrice:170,
      bookDiscription:"**The Little Prince** by Antoine de Saint-Exupéry is a beautiful story about a young prince who travels from planet to planet and meets different people. Through his journey, the book explores love, friendship, loneliness, and the true meaning of life.",
      bookPhoto:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/book/3/6/c/the-little-prince-antoine-de-saint-exup-ry-classic-english-novel-original-imahhzkgevngecz6.jpeg?q=90"
    },
    

  ]

  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routers>
      <Route path="/" element={<Cards1 products={Products}/>}/>
      <Route path="/products" element={<Cards2 books={books}/> }/>
    </Routers>
   <HomeCarousel/>
      </BrowserRouter>
      <Footer/>
</>
  )
}

export default App
