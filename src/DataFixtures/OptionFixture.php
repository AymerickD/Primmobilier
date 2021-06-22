<?php

namespace App\DataFixtures;

use App\Entity\Option;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class OptionFixture extends Fixture {

    public function load(ObjectManager $manager)
    {
        $ascenseur = new Option();
        $ascenseur->setName('Ascenseur');
        $manager->persist($ascenseur);

        $meuble = new Option();
        $meuble->setName('Meublé');
        $manager->persist($meuble);

        $jardin = new Option();
        $jardin->setName('Jardin');
        $manager->persist($jardin);

        $terrasse = new Option();
        $terrasse->setName('Terrasse');
        $manager->persist($terrasse);

        $parking = new Option();
        $parking->setName('Place de parking');
        $manager->persist($parking);

        $cave = new Option();
        $cave->setName('Cave');
        $manager->persist($cave);

        $manager->flush();
    }
}