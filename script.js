* {
  margin: 0;
  padding: 0;
}

nav {
  background-color: #6f4e37;
  color: white;
  padding: 20px 40px;
  font-size: 22px;
  font-weight: bold;
}

.hero {
  background-color: #829460;
  color: white;
  text-align: center;
  padding: 100px 40px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease 0.3s both;
}

button {
  background-color: #e2b96f;
  color: black;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  animation: fadeInUp 1s ease 0.6s both;
}

footer {
  background-color: #6f4e37;
  color: white;
  text-align: center;
  padding: 20px;
}

.fasilitas {
  display: flex;
  gap: 20px;
  padding: 60px 40px;
  background-color: #f9f5f0;
}

.kartu {
  flex: 1;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  color: #1a1a2e;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #c9a55f;
  cursor: pointer;
}

.kartu:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.booking {
  padding: 60px 40px;
  text-align: center;
  background-color: #1a1a2e;
  color: white;
}

.booking h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.booking form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 15px;
}

.booking input {
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.booking button {
  background-color: #e2b96f;
  color: black;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 28px;
  }

  .hero {
    padding: 60px 20px;
  }

  .fasilitas {
    flex-direction: column;
  }

  nav {
    font-size: 16px;
    padding: 15px 20px;
  }
}