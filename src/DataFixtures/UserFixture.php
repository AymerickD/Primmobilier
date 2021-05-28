<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture
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
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
