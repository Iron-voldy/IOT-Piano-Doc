---
layout: home

# Hero section
hero:
  name: IoT Piano Visualizer
  text: Interactive Piano Learning with Real-Time LED Feedback.
  image:
    src: /IOT-Piano-Doc/assets/images/logo2.png  # Ensure this path matches the actual location of your image file.
    alt: IoT Piano Visualizer logo
  tagline: Project Documentation Version 1.0
  actions:
    - theme: brand
      text: Get Started
      link: /IOT-Piano-Doc/introduction   # Make sure this links to an existing file like introduction.md
    - theme: alt
      text: View on GitHub
      link: https://github.com/iron-voldy/IOT-Piano-Doc

# Features section
features:
  - icon: 🎹
    title: Real-Time LED Feedback
    details: Experience interactive piano learning with real-time visual feedback using an RGB LED strip. As each note is played, corresponding LEDs light up, enhancing the learning experience through immediate visual guidance.

  - icon: 📝
    title: Performance Tracking and Analysis
    details: Track and analyze your piano performance. The system stores data such as note accuracy, timing, and scores, allowing learners to review and improve their skills over time.

  - icon: 📡
    title: Seamless IoT Connectivity
    details: The system uses Wi-Fi to connect with the backend server, ensuring real-time data transfer and storage. Learners can access their progress anytime, and administrators can manage song data and user performance seamlessly.

  - icon: 🎵
    title: Customizable Song Library
    details: Easily add, update, or remove songs in the system’s song library. Learners can select their favorite tracks or practice new tunes with a wide selection of songs stored on the server.

  - icon: 💻
    title: Intuitive Web Interface
    details: The web interface is designed for ease of use, allowing learners to select songs, view performance records, and administrators to manage the song library and user data with just a few clicks.

  - icon: 🔒
    title: Secure Data Management
    details: All user performance data and song information are securely stored in a MySQL database, ensuring both accuracy and privacy. The system implements encryption and secure data transfer protocols.

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: IoT Piano Visualizer
  - - meta
    - property: og:image
      content: https://iron-voldy.github.io/IOT-Piano-Doc/assets/images/Card.png  # Ensure this points to an actual image on your repo
  - - meta
    - property: og:url
      content: https://iron-voldy.github.io/IOT-Piano-Doc/  # Ensure this is the correct URL for your GitHub Pages site
  - - meta
    - name: title
      content: IoT Piano Visualizer
  - - meta
    - name: twitter:card
      content: https://iron-voldy.github.io/IOT-Piano-Doc/assets/images/Card.png  # Ensure the image path is correct
  - - link
    - rel: icon
      type: image/png
      href: /IOT-Piano-Doc/assets/images/logo.png  # Ensure this path is valid
---
