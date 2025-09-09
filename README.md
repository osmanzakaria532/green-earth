## WELCOME TO ASSIGNMENT-006

---

# Green Earth

---

## ✅ Main Requirements

#### 1) Navbar ( Done )

- Website **logo/name** on the **left**
- **Menu items** in the **center**
- **Plant a Tree button** on the **right**

#### 2) Banner ( Done )

- A **background image**
- A **title** and **subtitle**
- A **centered button**

#### 3) About Campaign ( Done )

- **Section heading**
- **Image on the left**, **text on the right**

#### 4) Our Impact Section ( Done )

- Show **3 cards** with campaign **statistics**

#### 5) Plant a Tree Today Section & Footer ( Done )

- **Form**: Name, Email, Number of Trees
- **Footer** with copyright info

#### 6) Responsiveness ( Done )

- Website must be **mobile responsive**

---

#### 7) Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

        ```
           var
             ফাংশন scope (function scoped)। পুনরায় declare করা যায়।

           let
             ব্লক scope (block scoped)। পুনরায় declare করা যায় না, কিন্তু value পরিবর্তন করা যায়।

           const
             ব্লক scope (block scoped)। একবার assign করার পর value পরিবর্তন করা যায় না। সাধারণত স্থায়ী (constant) মান রাখার জন্য ব্যবহার হয়।
        ```

#### 2) What is the difference between map(), forEach(), and filter() ?

        ```
           forEach()
              array element এর উপর কাজ করে। নতুন array return করে না,

           map()
               প্রতিটি element এর উপর কাজ করে এবং নতুন array return করে।

           filter()
               নির্দিষ্ট condition মেনে element গুলো রেখে নতুন array return করে।
        ```

#### 3) What are arrow functions in ES6 ?

        ```
          const add = (a, b) => (a + b) / const add = (a, b) => {a + b};
        ```

#### 4) How does destructuring assignment work in ES6 ?

        ```
          Destructuring হলো array বা object থেকে value আলাদা আলাদা variable এ নেওয়ার শর্টকাট।
        ```

#### 5) Explain template literals in ES6.How are they different from string concatenation ?

        ```
          Template literals হলো backtick (`) ব্যবহার করে string তৈরি করার নতুন উপায়।
          এর মাধ্যমে variable কে সহজে string এর ভেতরে বসানো যায়। multi - line string সহজে লেখা যায়।
          কিন্তু string এর মাধ্যমে সহজে েতা করা যায় না
        ```

## ⚙️ Functionalities

1. Category Loading ( Done )
   Load Tree Categories dynamically on the left side.

2. Category Click → Tree Data ( Done )
   On clicking a category: load trees of that category.

Display in a 3-column card layout. ( Done )

3.  Card Contents
    Each card includes:

           - Image

           -  Name

           - Short description ( No-Done )

           - Category

           - Price

           - Add to Cart button

4.  Modal on Card Click ( Done )
    Clicking a tree name on a card opens a modal with full tree details.

## 🧪 Challenges

    1) Add to Cart ( Done )
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name

    2) Total Calculation ( done )
    Calculate total price of trees in cart.

    3) Remove from Cart ( Done )
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner ( Done )
    Show spinner while data is loading.

    5) Active Button State ( Done )
    Highlight active category button when selected.

🧰 Technology Stack:

        HTML

        CSS ( Tailwind / DaisyUI)

        JavaScript (Vanilla only)

📌 Rules ( Done )
✅ At least 5 meaningful commits

❌ Done

## 🔗 Submission

- **Live Link :** https://green-earth-indol.vercel.app/
- **GitHub Repository:** https://github.com/osmanzakaria532/green-earth

---


## 🌴 API Endpoints

1. Get 🌴All Plants

```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>

```bash
https://openapi.programming-hero.com/api/categories
```

3. Get 🌴plants by categories <br/>

```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```

---