# React TypeScript Development Rules
# Atomic Design | Arrow Functions | Clean Code Standards

## Core Principles

Write concise, technical TypeScript code following modern React best practices.
- Use arrow function components exclusively
- Declare first, export after (named exports preferred)
- Follow Atomic Design methodology for component structure
- Prefer composition over inheritance
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Keep functions pure and side-effect free when possible

## TypeScript Configuration

Enable strict mode in tsconfig.json:
- "strict": true
- "noImplicitAny": true
- "strictNullChecks": true
- "strictFunctionTypes": true
- Explicitly type all function returns
- Never use 'any' type - always provide precise types
- Minimize @ts-ignore and @ts-expect-error usage

## Code Formatting Standards (ES2023+)

- 2-space indentation
- Single quotes for strings
- No semicolons (unless necessary for disambiguation)
- No unused variables or imports
- Space after keywords: if (condition)
- Space before function parenthesis: const fn = () => {}
- Always use === and !== (never == or !=)
- Operators must be spaced: a + b
- Commas followed by space: { a, b, c }
- Max line length: 100 characters
- Trailing commas in multiline objects/arrays

## Component Declaration Pattern

Always use arrow functions with explicit typing:

```typescript
// Component types first
interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
}

// Arrow function component with explicit return type
const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps): JSX.Element => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

// Named export after declaration
export { Button }
```

For simple components use concise syntax:
```typescript
const Card = ({ children }: CardProps): JSX.Element => (
  <div className="card">{children}</div>
)

export { Card }
```

## Export Conventions

Named Exports (Default Choice):
- Use for all reusable components
- Better refactoring support
- Consistent naming across imports
- Enables better IDE autocomplete

```typescript
// Multiple named exports
const Button = ({ label }: ButtonProps): JSX.Element => {
  return <button>{label}</button>
}

const IconButton = ({ icon }: IconButtonProps): JSX.Element => {
  return <button><Icon name={icon} /></button>
}

export { Button, IconButton }
```

Default Exports (Use Sparingly):
- Only for pages, layouts, or single-purpose files
- When component is the sole export

```typescript
const HomePage = (): JSX.Element => {
  return <main>Home Content</main>
}

export default HomePage
```

## File Structure - Atomic Design

```
src/
├── components/
│   ├── atoms/              # Basic building blocks
│   │   ├── button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.module.css
│   │   │   └── index.ts    # Re-export
│   │   ├── input/
│   │   └── label/
│   ├── molecules/          # Simple component groups
│   │   ├── search-bar/
│   │   ├── form-field/
│   │   └── card/
│   ├── organisms/          # Complex UI sections
│   │   ├── header/
│   │   ├── footer/
│   │   └── sidebar/
│   ├── templates/          # Page layouts
│   │   ├── main-layout/
│   │   └── dashboard-layout/
│   └── pages/              # Specific page instances
│       ├── home/
│       └── dashboard/
├── hooks/
│   ├── useAuth.ts
│   ├── useForm.ts
│   └── useDebounce.ts
├── utils/
│   ├── validation.ts
│   ├── format.ts
│   └── constants.ts
├── types/
│   ├── user.types.ts
│   ├── api.types.ts
│   └── common.types.ts
├── services/
│   └── api/
│       ├── auth.ts
│       └── users.ts
└── styles/
    ├── globals.css
    └── theme.css
```

## Naming Conventions

Files & Directories:
- Component files: PascalCase.tsx (Button.tsx, SearchBar.tsx)
- Type files: PascalCase.types.ts (Button.types.ts)
- Hook files: camelCase.ts with 'use' prefix (useAuth.ts)
- Util files: camelCase.ts (validation.ts, formatDate.ts)
- Directories: kebab-case (search-bar/, user-profile/)
- Test files: ComponentName.test.tsx
- Style modules: ComponentName.module.css

Variables & Functions:
- Components: PascalCase (Button, SearchBar, UserProfile)
- Hooks: camelCase with 'use' prefix (useAuth, useFormValidation)
- Functions: camelCase with verb prefix (handleClick, validateEmail, fetchData)
- Constants: UPPER_SNAKE_CASE (API_URL, MAX_ITEMS, DEFAULT_TIMEOUT)
- Boolean variables: is/has/should prefix (isLoading, hasError, shouldRender)
- Event handlers: handle prefix (handleClick, handleSubmit, handleChange)

## Type Definition Patterns

Always use interfaces for props (not type aliases):
```typescript
// ✅ CORRECT: Interface for props
interface UserCardProps {
  user: User
  onEdit: (id: string) => void
  className?: string
}

// ❌ AVOID: Type alias for props
type UserCardProps = {
  user: User
}
```

Declare types before implementation:
```typescript
// Types first
interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
}

// Implementation after
const Card = ({ title, description, children }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export { Card }
```

Use type for unions, intersections, and utilities:
```typescript
type Status = 'idle' | 'loading' | 'success' | 'error'
type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'sm' | 'md' | 'lg'

type ButtonVariant = 
  | { variant: 'icon'; icon: string }
  | { variant: 'text'; label: string }
```

## Atomic Design Implementation

Atoms - Basic Building Blocks:
```typescript
// components/atoms/button/Button.types.ts
export interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// components/atoms/button/Button.tsx
import type { ButtonProps } from './Button.types'

const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button'
}: ButtonProps): JSX.Element => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export { Button }

// components/atoms/button/index.ts
export { Button } from './Button'
export type { ButtonProps } from './Button.types'
```

Molecules - Simple Component Groups:
```typescript
// components/molecules/search-bar/SearchBar.types.ts
export interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  initialValue?: string
}

// components/molecules/search-bar/SearchBar.tsx
import { useState } from 'react'
import { Input } from '@/components/atoms/input'
import { Button } from '@/components/atoms/button'
import type { SearchBarProps } from './SearchBar.types'

const SearchBar = ({ 
  onSearch, 
  placeholder = 'Search...',
  initialValue = '' 
}: SearchBarProps): JSX.Element => {
  const [query, setQuery] = useState<string>(initialValue)
  
  const handleSubmit = (): void => {
    if (query.trim()) {
      onSearch(query)
    }
  }
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  
  return (
    <div className="search-bar">
      <Input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
      <Button label="Search" onClick={handleSubmit} />
    </div>
  )
}

export { SearchBar }
```

Organisms - Complex UI Sections:
```typescript
// components/organisms/header/Header.types.ts
import type { User } from '@/types/user.types'

export interface HeaderProps {
  user?: User | null
  onLogout?: () => void
}

// components/organisms/header/Header.tsx
import { Logo } from '@/components/atoms/logo'
import { Navigation } from '@/components/molecules/navigation'
import { SearchBar } from '@/components/molecules/search-bar'
import { UserMenu } from '@/components/molecules/user-menu'
import type { HeaderProps } from './Header.types'

const Header = ({ user, onLogout }: HeaderProps): JSX.Element => {
  const handleSearch = (query: string): void => {
    console.log('Searching for:', query)
  }
  
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      {user && <UserMenu user={user} onLogout={onLogout} />}
    </header>
  )
}

export { Header }
```

## React Hooks Best Practices

Hook Declaration Pattern:
```typescript
// hooks/useAuth.ts
import { useState, useEffect, useCallback } from 'react'
import type { User, Credentials } from '@/types/user.types'

interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: Credentials) => Promise<void>
  logout: () => void
  error: Error | null
}

const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  
  const isAuthenticated = user !== null
  
  const login = useCallback(async (credentials: Credentials): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const userData = await authService.login(credentials)
      setUser(userData)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  const logout = useCallback((): void => {
    setUser(null)
    authService.logout()
  }, [])
  
  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      try {
        const userData = await authService.getCurrentUser()
        setUser(userData)
      } catch {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [])
  
  return { user, isLoading, isAuthenticated, login, logout, error }
}

export { useAuth }
```

Hook Usage Rules:
- Always call hooks at the top level of component
- Never call hooks conditionally
- Extract reusable logic into custom hooks
- Type all hook returns explicitly
- Use destructuring for hook returns
- Clean up side effects in useEffect

## Event Handling with TypeScript

Type all event handlers explicitly:
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setValue(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault()
  // Submit logic
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.stopPropagation()
  // Click logic
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (e.key === 'Enter') {
    // Enter key logic
  }
}

const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
  // Focus logic
}

const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
  // Blur logic
}
```

## State Management Patterns

Simple state with explicit typing:
```typescript
const [count, setCount] = useState<number>(0)
const [user, setUser] = useState<User | null>(null)
const [items, setItems] = useState<string[]>([])
const [isOpen, setIsOpen] = useState<boolean>(false)
```

Complex state with useReducer:
```typescript
interface State {
  loading: boolean
  data: Data | null
  error: Error | null
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR'; payload: Error }

const initialState: State = {
  loading: false,
  data: null,
  error: null
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { loading: false, data: action.payload, error: null }
    case 'FETCH_ERROR':
      return { loading: false, data: null, error: action.payload }
    default:
      return state
  }
}

const useDataFetch = (): State => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return state
}
```

## Performance Optimization

Memoization patterns:
```typescript
// Memoize expensive computations
const expensiveValue = useMemo(
  () => computeExpensiveValue(data),
  [data]
)

// Memoize callback functions
const handleClick = useCallback(
  (id: string): void => {
    doSomething(id, value)
  },
  [value]
)

// Memoize components
import { memo } from 'react'

const ExpensiveComponent = memo(({ data }: Props): JSX.Element => {
  return <div>{/* Complex rendering */}</div>
})
```

Code splitting and lazy loading:
```typescript
import { lazy, Suspense } from 'react'

const LazyDashboard = lazy(() => import('./pages/Dashboard'))
const LazyProfile = lazy(() => import('./pages/Profile'))

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/dashboard" element={<LazyDashboard />} />
        <Route path="/profile" element={<LazyProfile />} />
      </Routes>
    </Suspense>
  )
}
```

## Clean Code Principles

Single Responsibility:
- One component does one thing well
- Extract logic into custom hooks
- Separate business logic from UI
- Keep components focused and small

Early Returns (Guard Clauses):
```typescript
const UserProfile = ({ user }: UserProfileProps): JSX.Element | null => {
  // Early returns for validation
  if (!user) return null
  if (!user.isActive) return <InactiveMessage />
  if (user.isBlocked) return <BlockedMessage />
  
  // Main render logic
  return (
    <div className="user-profile">
      <Avatar src={user.avatar} />
      <UserInfo user={user} />
    </div>
  )
}

export { UserProfile }
```

Extract Complex Conditionals:
```typescript
// ✅ CORRECT: Extract boolean logic
const isValidUser = user && user.isActive && !user.isBlocked
const canEdit = isOwner || isAdmin
const shouldShowActions = isAuthenticated && !isLoading

return (
  <div>
    {isValidUser && <UserContent />}
    {canEdit && <EditButton />}
    {shouldShowActions && <ActionButtons />}
  </div>
)

// ❌ AVOID: Complex inline conditions
return (
  <div>
    {user && user.isActive && !user.isBlocked && <UserContent />}
  </div>
)
```

DRY Principle:
- Create reusable components for repeated patterns
- Extract common logic into utilities
- Use composition over duplication

## Array Rendering and Keys

Always use proper keys:
```typescript
// ✅ CORRECT: Use unique IDs as keys
const UserList = ({ users }: UserListProps): JSX.Element => {
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

// ✅ ACCEPTABLE: Composite keys when no unique ID exists
const ItemList = ({ items }: ItemListProps): JSX.Element => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item.name}-${index}`}>{item.name}</li>
      ))}
    </ul>
  )
}

// ❌ AVOID: Index as key for dynamic lists
{items.map((item, index) => <Item key={index} />)}
```

## Error Handling and Validation

Input validation:
```typescript
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateURL = (url: string): boolean => {
  try {
    const parsed = new URL(url)
    return ['https:', 'http:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}
```

Error boundaries:
```typescript
import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null
  }
  
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, errorInfo: unknown): void {
    console.error('Error caught by boundary:', error, errorInfo)
  }
  
  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorMessage error={this.state.error} />
    }
    return this.props.children
  }
}

export { ErrorBoundary }
```

## Security Best Practices

XSS Protection:
```typescript
import DOMPurify from 'dompurify'

// Sanitize HTML content
const SafeHTML = ({ html }: { html: string }): JSX.Element => {
  const sanitizedHTML = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
}

// Safe external links
const SafeLink = ({ url, children }: SafeLinkProps): JSX.Element | null => {
  if (!validateURL(url)) return null
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

// Validate and sanitize user input
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '')
}
```

## ES2023+ Features to Use

Modern JavaScript features:
```typescript
// Optional chaining
const userName = user?.profile?.name
const firstItem = items?.[0]

// Nullish coalescing
const displayName = userName ?? 'Guest'
const count = itemCount ?? 0

// Array methods
const lastItem = items.at(-1)
const lastMatch = items.findLast((item) => item.active)
const reversed = items.toReversed()

// Object methods
const hasProperty = Object.hasOwn(obj, 'key')
const grouped = Object.groupBy(items, (item) => item.category)

// Spread operators
const newUser = { ...user, name: 'Updated' }
const allItems = [...items1, ...items2]

// Template literals
const className = `btn btn-${variant} ${isActive ? 'active' : ''}`

// Destructuring with defaults
const { name = 'Default', age = 0 } = user
```

## Testing Guidelines

Component testing structure:
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders with label', () => {
    render(<Button label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button label="Click" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('is disabled when disabled prop is true', () => {
    render(<Button label="Click" disabled />)
    expect(screen.getByText('Click')).toBeDisabled()
  })
})
```

## Code Quality Checklist

Before committing, verify:
- [ ] All components use arrow functions
- [ ] Named exports used (declare then export)
- [ ] All types declared with interfaces before implementation
- [ ] No unused variables or imports
- [ ] Explicit return types on all functions (: JSX.Element, : void, etc.)
- [ ] Props typed with interfaces (not type aliases)
- [ ] Event handlers have correct TypeScript event types
- [ ] Early returns used for validation
- [ ] Proper key props in all mapped lists
- [ ] Security measures implemented (XSS, URL validation)
- [ ] Components follow Atomic Design hierarchy
- [ ] Reusable logic extracted into custom hooks
- [ ] Performance optimizations where appropriate
- [ ] Clean, readable, self-documenting code
- [ ] No complex nested ternaries
- [ ] Guard clauses for conditional logic

## Prohibited Practices

Never use:
- ❌ Function declarations for components (use arrow functions)
- ❌ Default exports (except for pages/single-purpose files)
- ❌ Class components (use functional components with hooks)
- ❌ Inline styles (use CSS modules or styled-components)
- ❌ 'any' type (always provide explicit types)
- ❌ Type aliases for props (use interfaces)
- ❌ Nested component definitions
- ❌ Index as key in dynamic lists
- ❌ Direct state mutation
- ❌ Conditional hook calls
- ❌ Unused variables or imports
- ❌ Complex nested ternaries in JSX
- ❌ Console.log in production code
- ❌ Hardcoded strings (use constants)

