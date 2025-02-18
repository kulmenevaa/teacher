<?php declare(strict_types=1);

namespace App\Services;

use App\Http\Resources\UserResource;
use App\Interfaces\Services\UserServiceInterface;
use App\Interfaces\Requests\SaveUserRequestInterface;
use App\Interfaces\Repositories\UserRepositoryInterface;

class UserService implements UserServiceInterface
{
    public function __construct(
        private readonly UserRepositoryInterface $userRepository
    ) {
        
    }

    public function register(SaveUserRequestInterface $request): UserResource
    {
        $user = $this->userRepository->create($request);
        return UserResource::make($user);
    }
}