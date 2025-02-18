<?php declare(strict_types=1);

namespace App\Interfaces\Repositories;

use App\Models\User;
use App\Interfaces\Requests\SaveUserRequestInterface;

interface UserRepositoryInterface
{
    public function create(SaveUserRequestInterface $request): User;
}