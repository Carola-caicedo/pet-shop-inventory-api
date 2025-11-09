import { RolesGuard } from '../../src/auth/guards/roles.guard';
import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

describe('RolesGuard', () => {
    let guard: RolesGuard;
    let reflector: Reflector;

    beforeEach(() => {
        reflector = new Reflector();
        guard = new RolesGuard(reflector);
    });

    it('should be defined', () => {
        expect(guard).toBeDefined();
    });

    it('should allow access when no roles are required', () => {
        jest.spyOn(reflector, 'get').mockReturnValue(undefined);

        const mockContext = createMockContext('empleado');

        // Si tu guard retorna boolean cuando no hay roles requeridos
        const result = guard.canActivate(mockContext);
        expect(result).toBe(true);
    });

    it('should allow access when user has required role', () => {
        jest.spyOn(reflector, 'get').mockReturnValue(['admin', 'empleado']);

        const mockContext = createMockContext('admin');

        const result = guard.canActivate(mockContext);
        expect(result).toBe(true);
    });

    it('should deny access when user lacks required role', () => {
        jest.spyOn(reflector, 'get').mockReturnValue(['admin']);

        const mockContext = createMockContext('empleado');

        // Tu guard LANZA excepción, no retorna false
        expect(() => guard.canActivate(mockContext)).toThrow(ForbiddenException);
    });

    it('should deny access when no user is present', () => {
        jest.spyOn(reflector, 'get').mockReturnValue(['admin']);

        const mockContext = createMockContext(null);

        expect(() => guard.canActivate(mockContext)).toThrow(ForbiddenException);
    });

    function createMockContext(userRole: string | null): ExecutionContext {
        return {
            getHandler: () => ({}),
            getClass: () => ({}),
            switchToHttp: () => ({
                getRequest: () => ({
                    user: userRole ? { role: userRole } : null,
                }),
            }),
        } as ExecutionContext;
    }
});