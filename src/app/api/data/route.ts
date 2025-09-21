import csv from 'csv-parser'
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const results: any[] = []
    const datasetPath = path.join(process.cwd(), 'dataset')
    
    if (!fs.existsSync(datasetPath)) {
      return NextResponse.json({ error: 'Dataset directory not found' }, { status: 404 })
    }
    
    const files = fs.readdirSync(datasetPath)
    const csvFile = files.find(file => file.endsWith('.csv'))
    
    if (csvFile) {
      const filePath = path.join(datasetPath, csvFile)
      
      const data = await new Promise<any[]>((resolve, reject) => {
        const csvResults: any[] = []
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => csvResults.push(data))
          .on('end', () => resolve(csvResults))
          .on('error', (error) => reject(error))
      })
      
      return NextResponse.json({ 
        data: data.slice(0, 100),
        filename: csvFile,
        total: data.length 
      })
    }
    
    return NextResponse.json({ error: 'No CSV files found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read CSV' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }
    
    const text = await file.text()
    const results: any[] = []
    
    const lines = text.split('\n')
    const headers = lines[0].split(',').map(h => h.trim())
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',').map(v => v.trim())
        const obj: any = {}
        headers.forEach((header, index) => {
          obj[header] = values[index] || ''
        })
        results.push(obj)
      }
    }
    
    return NextResponse.json({ 
      data: results.slice(0, 100),
      filename: file.name,
      total: results.length 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process CSV' }, { status: 500 })
  }
}