<?php declare(strict_types=1);

namespace App\Interfaces\Services;

use App\Http\Resources\UserResource;
use App\Interfaces\Requests\SaveUserRequestInterface;

interface UserServiceInterface
{
    public function register(SaveUserRequestInterface $request): UserResource;
}