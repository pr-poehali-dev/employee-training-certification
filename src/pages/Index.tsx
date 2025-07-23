import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const stats = [
    { label: 'Всего курсов', value: '24', icon: 'BookOpen' },
    { label: 'Активных сотрудников', value: '156', icon: 'Users' },
    { label: 'Завершено тестов', value: '342', icon: 'CheckCircle' },
    { label: 'Средний балл', value: '87%', icon: 'TrendingUp' }
  ];

  const courses = [
    { title: 'Охрана труда', progress: 85, participants: 45, status: 'active' },
    { title: 'Информационная безопасность', progress: 92, participants: 32, status: 'completed' },
    { title: 'Корпоративная этика', progress: 67, participants: 28, status: 'active' },
    { title: 'Пожарная безопасность', progress: 45, participants: 52, status: 'active' }
  ];

  const recentTests = [
    { name: 'Иванов А.П.', course: 'Охрана труда', score: 95, date: '23.07.2025' },
    { name: 'Петрова М.С.', course: 'ИБ', score: 88, date: '23.07.2025' },
    { name: 'Сидоров В.И.', course: 'Этика', score: 76, date: '22.07.2025' }
  ];

  return (
    <div className="min-h-screen bg-system-light font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <h1 className="text-xl font-heading font-semibold text-system-gray">
                Система обучения персонала
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-system-gray hover:text-primary transition-colors">Курсы</a>
              <a href="#" className="text-system-gray hover:text-primary transition-colors">Тестирование</a>
              <a href="#" className="text-system-gray hover:text-primary transition-colors">Аттестация</a>
              <a href="#" className="text-system-gray hover:text-primary transition-colors">Отчеты</a>
            </nav>

            <Button className="bg-primary hover:bg-blue-600">
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить курс
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-fade-in border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-system-gray mt-2">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Training Courses */}
          <div className="lg:col-span-2">
            <Card className="animate-scale-in border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-heading text-system-gray">Учебные курсы</CardTitle>
                    <CardDescription>Прогресс обучения по направлениям</CardDescription>
                  </div>
                  <Icon name="BookOpen" size={20} className="text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-system-gray">{course.title}</h3>
                        <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                          {course.status === 'completed' ? 'Завершен' : 'Активный'}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">{course.participants} чел.</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Прогресс</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Test Results */}
          <div>
            <Card className="animate-scale-in border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-heading text-system-gray">Последние тесты</CardTitle>
                    <CardDescription>Результаты аттестации</CardDescription>
                  </div>
                  <Icon name="FileText" size={20} className="text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium text-sm text-system-gray">{test.name}</p>
                      <p className="text-xs text-gray-500">{test.course}</p>
                      <p className="text-xs text-gray-400">{test.date}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        test.score >= 90 ? 'bg-green-100 text-green-800' : 
                        test.score >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {test.score}%
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testing Module */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="animate-fade-in border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-heading text-system-gray flex items-center">
                <Icon name="ClipboardCheck" size={20} className="mr-2" />
                Модуль тестирования
              </CardTitle>
              <CardDescription>Система проверки знаний и аттестации</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-system-gray mb-3">Активные тесты</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Охрана труда - Модуль 1</span>
                    <Badge className="bg-green-100 text-green-800">12 активных</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Информационная безопасность</span>
                    <Badge className="bg-orange-100 text-orange-800">8 активных</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Корпоративная этика</span>
                    <Badge className="bg-blue-100 text-blue-800">5 активных</Badge>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm text-gray-600">Средний балл</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">156</div>
                  <div className="text-sm text-gray-600">Тестов пройдено</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-heading text-system-gray">Визуализация данных</CardTitle>
              <CardDescription>Аналитика обучения персонала</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src="/img/d677b865-ef18-419a-b1a0-8d26e3d2bc8f.jpg" 
                alt="Аналитика системы обучения" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Эффективность обучения</span>
                  <span className="text-sm text-primary font-semibold">↑ 12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Время прохождения тестов</span>
                  <span className="text-sm text-gray-600">15 мин среднее</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Сертификации выданы</span>
                  <span className="text-sm text-green-600">84 шт.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="animate-fade-in border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-heading text-system-gray">Быстрые действия</CardTitle>
              <CardDescription>Управление обучением и тестированием</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-primary hover:text-white transition-colors">
                  <Icon name="PlusCircle" size={20} />
                  <span>Создать тест</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Users" size={20} />
                  <span>Назначить курс</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-primary hover:text-white transition-colors">
                  <Icon name="BarChart3" size={20} />
                  <span>Отчет по обучению</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;