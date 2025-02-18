<?php declare(strict_types=1);

namespace App\Repositories;

use App\Models\User;
use App\Interfaces\Requests\SaveUserRequestInterface;
use App\Interfaces\Repositories\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    public function __construct(
        private User $user
    ) {
        
    }

    public function create(SaveUserRequestInterface $request): User
    {
        return $this->user->create($request->getUserData());
    }
}