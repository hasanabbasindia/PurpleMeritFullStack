import csv from 'csv-parser'
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const results: any[] = []
    const datasetPath = path.join(process.cwd(), 'dataset')
    
    const files = fs.readdirSync(datasetPath)
    const csvFile = files.find(file => file.endsWith('.csv'))
    
    if (csvFile) {
      const filePath = path.join(datasetPath, csvFile)
      
      return new Promise((resolve) => {
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            resolve(NextResponse.json({ 
              data: results.slice(0, 100),
              filename: csvFile,
              total: results.length 
            }))
          })
      })
    }
    
    return NextResponse.json({ error: 'No CSV files found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read CSV' }, { status: 500 })
  }
}