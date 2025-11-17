"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Dumbbell, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de cadastro aqui
    console.log("Cadastro:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            Crie sua Conta no FitAI!
          </h1>
          <p className="text-gray-600">
            Comece sua jornada de transformação hoje
          </p>
        </div>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Campo de Nome */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-semibold">
              Nome Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="h-12 border-2 border-gray-300 focus:border-orange-500 transition-colors"
              required
            />
          </div>

          {/* Campo de E-mail */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
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
                placeholder="Crie uma senha segura"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="h-12 border-2 border-gray-300 focus:border-orange-500 transition-colors pr-12"
                required
                minLength={6}
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

          {/* Campo de Confirmar Senha */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700 font-semibold">
              Confirmar Senha
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className="h-12 border-2 border-gray-300 focus:border-orange-500 transition-colors pr-12"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label={showConfirmPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Botão de Cadastro */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-6"
          >
            Criar Conta
          </Button>
        </form>

        {/* Opções Adicionais */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Link 
              href="/login" 
              className="text-orange-600 hover:text-orange-700 font-bold hover:underline"
            >
              Fazer login
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
