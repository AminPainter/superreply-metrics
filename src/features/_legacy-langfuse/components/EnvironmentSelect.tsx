import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const ENVIRONMENTS = ['staging', 'production', 'development', 'default'] as const
export type Environment = (typeof ENVIRONMENTS)[number]

interface Props {
  value: Environment
  onChange: (next: Environment) => void
}

export function EnvironmentSelect({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as Environment)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Environment" />
      </SelectTrigger>
      <SelectContent>
        {ENVIRONMENTS.map((env) => (
          <SelectItem key={env} value={env}>
            {env}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
