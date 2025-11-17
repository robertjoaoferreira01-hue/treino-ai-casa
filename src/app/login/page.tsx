"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Dumbbell, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de login aqui
    console.log("Login:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-2xl border-2 border-gray-200">
        {/* Cabeçalho - Logo e Título */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              FitAI
            </span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo de Volta ao FitAI!
          </h1>
          <p className="text-gray-600">
            Entre para continuar sua jornada de transformação
          </p>
        </div>

        {/* Formulário de Login */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Campo de E-mail */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-2 border-gray-300 focus:border-orange-500 transition-colors"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-semibold">
              Senha
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-2 border-gray-300 focus:border-orange-500 transition-colors pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Link Esqueci a Senha */}
          <div className="text-right">
            <Link 
              href="/forgot-password" 
              className="text-sm text-orange-600 hover:text-orange-700 font-semibold hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>

          {/* Botão de Login */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Entrar
          </Button>
        </form>

        {/* Opções Adicionais */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-600">
            Ainda não tem uma conta?{" "}
            <Link 
              href="/signup" 
              className="text-orange-600 hover:text-orange-700 font-bold hover:underline"
            >
              Criar nova conta
            </Link>
          </p>
        </div>

        {/* Rodapé */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">
              Para suporte, entre em contato pelo e-mail{" "}
              <a 
                href="mailto:suporte@fitai.com" 
                className="text-orange-600 hover:text-orange-700 font-semibold hover:underline"
              >
                suporte@fitai.com
              </a>
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-600 hover:text-orange-600 hover:underline transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/terms" 
                className="text-gray-600 hover:text-orange-600 hover:underline transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
