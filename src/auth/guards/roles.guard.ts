import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../../users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<UserRole[]>(
            'roles',
            context.getHandler(),
        );

        // Si no hay roles requeridos, permitir acceso
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        // Verificar si el usuario existe y tiene rol
        if (!user) {
            throw new ForbiddenException('User not authenticated');
        }

        if (!user.role) { // ← CORREGIDO: era 'rol', ahora 'role'
            throw new ForbiddenException('User role not found');
        }

        // Verificar si el usuario tiene uno de los roles requeridos
        const hasRequiredRole = requiredRoles.includes(user.role);

        if (!hasRequiredRole) {
            throw new ForbiddenException(
                `Access denied. Required roles: ${requiredRoles.join(', ')}. Your role: ${user.role}`
            );
        }

        return true;
    }
}