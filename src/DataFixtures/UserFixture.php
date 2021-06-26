<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture implements FixtureGroupInterface
{

    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setEmail('admin@admin.com')
            ->setUsername('admin')
            ->setPassword($this->encoder->encodePassword(
                $admin,
                'admin'
            ))
            ->setRoles(["ROLE_ADMIN"])
        ;
        $manager->persist($admin);
        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['groupProd'];
    }
}
