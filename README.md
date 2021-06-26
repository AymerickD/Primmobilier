# Primmobilier
Projet de soutenance Aymerick Demay


## Installation

```bash
git clone https://github.com/AymerickD/Primmobilier.git
cd Primmobilier
composer install
yarn install
yarn encore dev
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
mysql -uroot -proot agence-immo_db < primmobilier.sql
```

### MySQL

```bash
DATABASE_URL="mysql://root:root@127.0.0.1:3306/agence-immo_db?serverVersion=mariadb-10.3.29"

user: root
password: root
db_name: agence-immo_db
```

### Log BackOffice

```bash
url de connexion: /login
username: admin
paswword: admin
```

### Utilisation de maildev pour catch les envois de mail
